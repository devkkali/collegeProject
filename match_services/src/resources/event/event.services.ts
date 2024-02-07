import { Request } from "express";
// import jwt from "jsonwebtoken";
import { matchModel } from "../../database/models/match/match.model";
import { eventModel } from "../../database/models/event/event.model";
import { matchactivitylogModel } from "../../database/models/matchactivitylog/matchactivitylog";
import { calculateTotalGoal } from "../../utils/goal/utils.gol";

export namespace EventServices {

    export const CreateEvent = async (req: Request) => {
        try {
            const { match_id, player_id, activity_type } = req.body;
            console.log(req.body)


            const mapActivityTypeToField = (type: string): string => {
                switch (type) {
                    case "goal":
                        return "no_goals";
                    case "assist":
                        return "no_assist";
                    case "yellow":
                        return "no_yellow";
                    case "red":
                        return "no_red";
                    case "substitutedin":
                        return "no_added";
                    case "substitutedout":
                        return "no_removed";
                    default:
                        return "";
                }
            };



            const matchExists = await matchModel.Match.exists({ _id: match_id });
            if (!matchExists) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: {
                        message: "Match does not exist",
                        path: "match_id",
                    },
                });
            }


            // Check if the player is part of the specified match's team1 or team2
            const playerInMatch = await matchModel.Match.exists({
                _id: match_id,
                $or: [{ team1players: player_id }, { team2players: player_id }]
            });

            // console.log('playe@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', playerInMatch)

            if (!playerInMatch) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: {
                        message: "Player is not part of the specified match",
                        path: "player_id",
                    },
                });
            }
            // console.log('playe', playerInMatch)
            // return


            // Check if an event with the same player and match exists
            const existingEvent = await eventModel.Event.findOne({
                match_id,
                player_id
            });
            let updatedEvent;


            if (!existingEvent) {
                // If the event doesn't exist, create a new one
                const newEvent = new eventModel.Event({
                    match_id,
                    player_id,
                    [mapActivityTypeToField(activity_type)]: "1", // Set the field based on the activity type
                    // Add other fields as needed
                });

                await newEvent.save();
                updatedEvent = newEvent;

            }
            else {
                // If the event exists, update points based on activity type
                const fieldToUpdate = mapActivityTypeToField(activity_type);
                if (fieldToUpdate) {
                    const count = parseInt((existingEvent as any)[fieldToUpdate]!) || 0;
                    (existingEvent as any)[fieldToUpdate] = (count + 1).toString();
                }

                await existingEvent.save();
                updatedEvent = existingEvent;

            }


            // Log the activity
            const logEntry = new matchactivitylogModel.MatchActivityLog({
                match_id,
                player_id,
                event_type: activity_type,
            });
            await logEntry.save();

            return Promise.resolve({
                'data': updatedEvent,
                'message': 'Event Created/Updated Successfully',
                'url': 'system/dashboard/events'
            });




        } catch (e) {
            return Promise.reject(e);
        }
    };



    export const GetEventsMatch = async (req: Request) => {
        try {
            if (req.params.id) {
                var match_id = req.params.id;

                const getMatchInfo = async (matchId: string) => {
                    const matchInfo = await matchModel.Match.findById(matchId).populate('team1').populate('team2').exec();
                    return matchInfo;
                };

                // const check_match = await eventModel.Event.find({ match_id });
                // if (!check_match || check_match.length === 0) {
                //     return Promise.reject({
                //         code: 400,
                //         http_status_code: 404,
                //         error: {
                //             message: "event does not exist",
                //             path: "name",
                //         },
                //     });
                // }

                const matchInfo = await getMatchInfo(match_id);
                // console.log(matchInfo)

                const formatEvents = async (match_id: string, teamInfo: any, teamplayers: any[]) => {

                    const matchLogs = await matchactivitylogModel.MatchActivityLog
                        .find({ match_id })
                        .populate('player_id')
                        .lean()
                        .exec();

                    // Filter events based on whether player's ID is in teamplayers array
                    // Assuming teamplayers is an array of player IDs
                    const teamPlayerIds = teamplayers.map(playerId => playerId.toString());

                    // Filter match logs based on whether player's ID is in teamplayers array
                    const filteredMatchLogs = matchLogs.filter(log => {
                        // Check if player_id and _id properties exist before accessing them
                        if (log.player_id && typeof log.player_id === 'object' && '_id' in log.player_id) {
                            const playerId = log.player_id._id?.toString();
                            return playerId && teamPlayerIds.includes(playerId);
                        }
                    });


                    // console.log('teamplayers********************************************************', teamplayers)
                    // console.log('matchlogs********************************************************', matchLogs)
                    // console.log('filteredEvents***************************************************', filteredMatchLogs)




                    return {
                        name: teamInfo.name,
                        image: teamInfo.image,
                        // goal: calculateTotalGoals(filteredMatchLogs),  // You need to calculate total goals
                        events: filteredMatchLogs.map((event) => ({
                            name: event.player_id.name,         // Adjust these properties based on the actual structure of events
                            event_type: event.event_type,
                            // Include other event properties here
                        })),
                    };
                };


                // const totalGoals = calculateTotalGoals(check_match);

                const formattedEventsTeam1 = await formatEvents(match_id, matchInfo?.team1 || {}, matchInfo?.team1players || []);
                const formattedEventsTeam2 = await formatEvents(match_id, matchInfo?.team2 || {}, matchInfo?.team2players || []);

                const GoalTeam1 = await calculateTotalGoal(match_id, matchInfo?.team1players as any || []);
                const GoalTeam2 = await calculateTotalGoal(match_id, matchInfo?.team2players as any || []);

                // console.log('team1 events', GoalTeam1)
                // console.log('team2 events', GoalTeam2)




                const response = {
                    id: matchInfo?._id,
                    status: matchInfo?.status,
                    match_time: matchInfo?.match_time,
                    team1: {
                        image: formattedEventsTeam1.image,
                        name: formattedEventsTeam1.name,
                        goal: GoalTeam1,
                        activities: formattedEventsTeam1.events || [],
                    },
                    team2: {
                        image: formattedEventsTeam2.image,
                        name: formattedEventsTeam2.name,
                        goal: GoalTeam2,
                        activities: formattedEventsTeam2.events || [],
                    },
                };

                return Promise.resolve(response);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    };

}
