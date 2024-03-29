import { Request } from "express";
// import jwt from "jsonwebtoken";
import { clubModel } from "../../database/models/club/club.model";
import { matchModel } from "../../database/models/match/match.model";
import { Type } from "../../database/models/match/type";
import { eventModel } from "../../database/models/event/event.model";
import { fantasyModel } from "../../database/models/fantasy/fantasy.model";

export namespace FantasyServices {

    // export const GetUserHistory = async (req: Request) => {
    //     try {
    //         const history = {
    //             "stat": {
    //               "total_score": "20",
    //               "total_match": "5"
    //             },
    //             "history": [
    //               {
    //                 "team1": {
    //                   "name": "Team1Name1",
    //                   "image": "Team1Image1",
    //                   "goal": "Team1Goal1"
    //                 },
    //                 "team2": {
    //                   "name": "Team2Name1",
    //                   "image": "Team2Image1",
    //                   "goal": "Team2Goal1"
    //                 },
    //                 "score": "80"
    //               },
    //               {
    //                 "team1": {
    //                   "name": "Team1Name2",
    //                   "image": "Team1Image2",
    //                   "goal": "Team1Goal2"
    //                 },
    //                 "team2": {
    //                   "name": "Team2Name2",
    //                   "image": "Team2Image2",
    //                   "goal": "Team2Goal2"
    //                 },
    //                 "score": "120"
    //               },
    //               {
    //                 "team1": {
    //                   "name": "Team1Name3",
    //                   "image": "Team1Image3",
    //                   "goal": "Team1Goal3"
    //                 },
    //                 "team2": {
    //                   "name": "Team2Name3",
    //                   "image": "Team2Image3",
    //                   "goal": "Team2Goal3"
    //                 },
    //                 "score": "90"
    //               }
    //             ]
    //           }


    //         return Promise.resolve(
    //             history
    //         );

    //     } catch (e) {
    //         return Promise.reject(e);
    //     }
    // };
    // export const GetMatchScoreBoard = async (req: Request) => {
    //     try {
    //         const scoreboard = [
    //             {
    //               "name": "roshan",
    //               "score": "30"
    //             },
    //             {
    //               "name": "john",
    //               "score": "45"
    //             },
    //             {
    //               "name": "emma",
    //               "score": "22"
    //             },
    //             {
    //               "name": "alex",
    //               "score": "50"
    //             }
    //           ]



    //         return Promise.resolve(
    //             scoreboard
    //         );

    //     } catch (e) {
    //         return Promise.reject(e);
    //     }
    // };
    export const CreateFantasy = async (req: Request) => {
        try {
            const fantasyDetails = req.body;

            // Find existing Fantasy team
            const existingFantasy = await fantasyModel.Fantasy.findOne({
                // user_id: fantasyDetails.user_id,
                user_id: '65bd183fde60d45e19405aff',
                match_id: fantasyDetails.match_id,
            });

            if (existingFantasy) {
                // Update the existing Fantasy team with new details
                existingFantasy.set(fantasyDetails);
                const updatedFantasy = await existingFantasy.save();

                return Promise.resolve({
                    data: updatedFantasy,
                    message: 'Fantasy Team Updated Successfully',
                    url: '/dashboard/matches'
                });
            }

            // If not found, create a new Fantasy team
            const newFantasy = new fantasyModel.Fantasy(fantasyDetails);
            const savedFantasy = await newFantasy.save();

            return Promise.resolve({
                data: savedFantasy,
                message: 'Fantasy Team Created Successfully',
                url: '/dashboard/matches'
            });

        } catch (e) {
            return Promise.reject(e);
        }
    };
    export const GetFantasy = async (req: Request) => {
        try {
            if (Object.keys(req.query).length > 0) {
                const fantasyDetails = req.query;

                // Find existing Fantasy team
                const existingFantasy = await fantasyModel.Fantasy.findOne({
                    user_id: fantasyDetails.user_id,
                    match_id: fantasyDetails.match_id,
                });

                if (existingFantasy) {
                    // Update the existing Fantasy team with new details
                    existingFantasy.set(fantasyDetails);
                    const updatedFantasy = await existingFantasy.save();

                    return Promise.resolve({
                        data: updatedFantasy,
                        message: 'Fantasy Team Updated Successfully',
                        url: '/dashboard/matches'
                    });
                }

                // If not found, create a new Fantasy team
                const newFantasy = new fantasyModel.Fantasy(fantasyDetails);
                const savedFantasy = await newFantasy.save();

                return Promise.resolve({
                    data: savedFantasy,
                    message: 'Fantasy Team Created Successfully',
                    url: '/dashboard/matches'
                });
            }
        } catch (e) {
            return Promise.reject(e);
        }
    };
    export const GetFantasyScore = async (req: Request) => {
        try {
            if (Object.keys(req.query).length > 0) {
                const fantasyTeamScore = {
                    score: "31",
                    team_name: "My fantasy team",
                    activities: [
                        {
                            player_name: "Roshan",
                            activity_type: "goal",
                            point: "+2"
                        },
                        {
                            player_name: "Rosha",
                            activity_type: "assist",
                            point: "+1"
                        },
                        {
                            player_name: "Rosh",
                            activity_type: "goal",
                            point: "+2"
                        },
                        {
                            player_name: "Ros",
                            activity_type: "red card",
                            point: "-2"
                        }
                    ]
                }











                return Promise.resolve(
                    fantasyTeamScore
                );
            }
        } catch (e) {
            return Promise.reject(e);
        }
    };




    // export const GetMatch = async (req: Request) => {
    //     if (Object.keys(req.query).length > 0) {
    //         console.log('i am from query', req.query)
    //         const filter = { ...req.query }
    //         try {
    //             for (const key in filter) {
    //                 filter[key] = { $regex: filter[key], $options: 'i' }
    //             }

    //             const check_match = await matchModel.Match.find(filter).limit(5);



    //             if (!check_match) {
    //                 return Promise.reject({
    //                     code: 400,
    //                     http_status_code: 404,
    //                     error: {
    //                         message: "Match does not exist",
    //                         path: "name",
    //                     },
    //                 });
    //             }
    //             return Promise.resolve(
    //                 check_match
    //             );

    //         } catch (e) {
    //             return Promise.reject(e);
    //         }
    //     }
    //     if (req.params.id) {
    //         var id = req.params.id
    //         try {
    //             console.log(id)
    //             const check_match = await matchModel.Match.findById(id).populate('team1').populate('team1players').populate('team2').populate('team2players').exec();
    //             if (!check_match) {
    //                 return Promise.reject({
    //                     code: 400,
    //                     http_status_code: 404,
    //                     error: {
    //                         message: "Match does not exist",
    //                         path: "name",
    //                     },
    //                 });
    //             }
    //             return Promise.resolve(
    //                 check_match
    //             );

    //         } catch (e) {
    //             return Promise.reject(e);
    //         }
    //     }

    //     try {
    //         const check_match = await matchModel.Match.find().populate('team1').populate('team2').exec();
    //         return Promise.resolve(
    //             check_match
    //         );

    //     } catch (e) {
    //         return Promise.reject(e);
    //     }
    // };




    // export const GetOngoingMatchByUser = async (req: Request) => {

    //     // let user_id = 


    //     try {
    //         let check_match: Type.ScoreExtendedMatch[] = await matchModel.Match.find({ status: 0 }).populate('team1').populate('team2').exec();
    //         const plainMatchObjects = check_match.map(match => JSON.parse(JSON.stringify(match)));

    //         const matchesWithScore: Type.ScoreExtendedMatch[] = plainMatchObjects.map(match => ({
    //             ...match,
    //             score: '60',
    //         }));

    //         console.log(matchesWithScore);

    //         return Promise.resolve(
    //             matchesWithScore
    //         );

    //     } catch (e) {
    //         return Promise.reject(e);
    //     }
    // };
    // export const GetUpcomingMatchByUser = async (req: Request) => {
    //     try {
    //         const pageNo = parseInt(req.query.page_no as string, 10) || 1;
    //         const pageSize = parseInt(req.query.page_size as string, 10) || 5;
    //         const totalMatches = await matchModel.Match.countDocuments({ status: 1 });


    //         let check_match: Type.ScoreExtendedMatch[] = await matchModel.Match.find({ status: 1 }).populate('team1').populate('team2').limit(pageSize).skip((pageNo - 1) * pageSize).exec();
    //         const plainMatchObjects = check_match.map(match => JSON.parse(JSON.stringify(match)));

    //         const matchesWithScore: Type.ScoreExtendedMatch[] = plainMatchObjects.map(match => ({
    //             ...match,
    //             myteam_status: Math.round(Math.random()) === 1,
    //         }));

    //         console.log(matchesWithScore);
    //         const total_pages = Math.ceil(totalMatches / pageSize);

    //         return Promise.resolve(
    //             {
    //                 matches: matchesWithScore,
    //                 page_size: pageSize,
    //                 total_pages: total_pages,
    //             }
    //         );
    //     } catch (e) {
    //         return Promise.reject(e);
    //     }
    // };



    // export const PlayersByMatch = async (req: Request) => {

    //     try {
    //         if (req.params.id) {
    //             var id = req.params.id

    //             console.log(id)
    //             // const check_match = await matchModel.Match.findById(id).populate('team1').populate('team1players').populate('team2').populate('team2players').exec();
    //             const check_match = await matchModel.Match.findById(id).populate('team1').populate('team1players').populate('team2').populate('team2players').exec();


    //             let allPlayers;

    //             if (check_match) {
    //                 // Use check_match safely here
    //                 const team1Players = check_match.team1players;
    //                 const team2Players = check_match.team2players;
    //                 allPlayers = [...(team1Players ?? []), ...(team2Players ?? [])];
    //             }

    //             if (!check_match) {
    //                 return Promise.reject({
    //                     code: 400,
    //                     http_status_code: 404,
    //                     error: {
    //                         message: "Match does not exist",
    //                         path: "name",
    //                     },
    //                 });
    //             }
    //             return Promise.resolve(
    //                 allPlayers
    //             );


    //         }
    //     } catch (e) {
    //         return Promise.reject(e);
    //     }
    // };

    // export const DeleteMatch = async (req: Request) => {

    //     try {
    //         let id = req.params.id
    //         const check_match = await matchModel.Match.deleteOne({ _id: id });

    //         if (check_match.deletedCount === 0) {
    //             return Promise.reject({
    //                 code: 400,
    //                 http_status_code: 404,
    //                 error: {
    //                     message: "Match does not exist",
    //                     path: "name",
    //                 },
    //             });
    //         }

    //         return Promise.resolve({
    //             message: 'Match deleted',
    //         });
    //     } catch (e) {
    //         return Promise.reject(e);
    //     }

    // };

    // export const UpdateMatch = async (req: Request) => {
    //     try {
    //         const check_match = await matchModel.Match.findOne({
    //             _id: req.params?.id,
    //         });

    //         if (check_match) {
    //             const match_details = req.body;

    //             console.log(match_details)

    //             // const new_club = new clubModel.Club(club_details);
    //             // const save_club = await new_club.save();


    //             const result = await matchModel.Match.updateOne({ _id: req.params.id }, { $set: req.body })
    //             console.log(result)
    //             const returnmatch = await matchModel.Match.findById(req.params.id);


    //             return Promise.resolve(
    //                 {
    //                     'data': returnmatch,
    //                     'message': 'Match Edited Successfully',
    //                     'url': 'system/dashboard/matches'
    //                 }

    //             );
    //         }
    //         if (!check_match) {
    //             return Promise.reject({
    //                 code: 400,
    //                 http_status_code: 404,
    //                 error: {
    //                     message: "Match does not exist",
    //                     path: "name",
    //                 },
    //             });
    //         }
    //     } catch (e) {
    //         return Promise.reject(e);
    //     }
    // };
}
