"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchServices = void 0;
const match_model_1 = require("../../database/models/match/match.model");
const event_model_1 = require("../../database/models/event/event.model");
var MatchServices;
(function (MatchServices) {
    MatchServices.GetUserHistory = async (req) => {
        try {
            const history = {
                "stat": {
                    "total_score": "20",
                    "total_match": "5"
                },
                "history": [
                    {
                        "team1": {
                            "name": "Team1Name1",
                            "image": "Team1Image1",
                            "goal": "1"
                        },
                        "team2": {
                            "name": "Team2Name1",
                            "image": "Team2Image1",
                            "goal": "2"
                        },
                        "score": "80"
                    },
                    {
                        "team1": {
                            "name": "Team1Name2",
                            "image": "Team1Image2",
                            "goal": "3"
                        },
                        "team2": {
                            "name": "Team2Name2",
                            "image": "Team2Image2",
                            "goal": "4"
                        },
                        "score": "120"
                    },
                    {
                        "team1": {
                            "name": "Team1Name3",
                            "image": "Team1Image3",
                            "goal": "5"
                        },
                        "team2": {
                            "name": "Team2Name3",
                            "image": "Team2Image3",
                            "goal": "6"
                        },
                        "score": "90"
                    }
                ]
            };
            return Promise.resolve(history);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    MatchServices.GetMatchScoreBoard = async (req) => {
        try {
            const scoreboard = [
                {
                    "name": "roshan",
                    "score": "30"
                },
                {
                    "name": "john",
                    "score": "45"
                },
                {
                    "name": "emma",
                    "score": "22"
                },
                {
                    "name": "alex",
                    "score": "50"
                }
            ];
            return Promise.resolve(scoreboard);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    MatchServices.CreateMatch = async (req) => {
        try {
            const match_details = req.body;
            const new_match = new match_model_1.matchModel.Match(match_details);
            const save_match = await new_match.save();
            // Create events for team1players
            const team1Events = match_details.team1players.map((playerId) => {
                return {
                    player_id: playerId,
                    match_id: save_match._id,
                    is_initial: "1", // or any other default value
                };
            });
            // Create events for team2players
            const team2Events = match_details.team2players.map((playerId) => {
                return {
                    player_id: playerId,
                    match_id: save_match._id,
                    is_initial: "1", // or any other default value
                };
            });
            // Concatenate team1Events and team2Events
            const allEvents = [...team1Events, ...team2Events];
            // Insert all events into the Event collection
            await event_model_1.eventModel.Event.insertMany(allEvents);
            return Promise.resolve({
                'data': save_match,
                'message': 'Match Created Successfully',
                'url': 'system/dashboard/matches'
            });
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    MatchServices.GetMatch = async (req) => {
        if (Object.keys(req.query).length > 0) {
            console.log('i am from query', req.query);
            const filter = { ...req.query };
            try {
                for (const key in filter) {
                    filter[key] = { $regex: filter[key], $options: 'i' };
                }
                const check_match = await match_model_1.matchModel.Match.find(filter).limit(5);
                if (!check_match) {
                    return Promise.reject({
                        code: 400,
                        http_status_code: 404,
                        error: {
                            message: "Match does not exist",
                            path: "name",
                        },
                    });
                }
                return Promise.resolve(check_match);
            }
            catch (e) {
                return Promise.reject(e);
            }
        }
        if (req.params.id) {
            var id = req.params.id;
            try {
                console.log(id);
                const check_match = await match_model_1.matchModel.Match.findById(id).populate('team1').populate('team1players').populate('team2').populate('team2players').exec();
                if (!check_match) {
                    return Promise.reject({
                        code: 400,
                        http_status_code: 404,
                        error: {
                            message: "Match does not exist",
                            path: "name",
                        },
                    });
                }
                return Promise.resolve(check_match);
            }
            catch (e) {
                return Promise.reject(e);
            }
        }
        try {
            const check_match = await match_model_1.matchModel.Match.find().populate('team1').populate('team2').exec();
            return Promise.resolve(check_match);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    MatchServices.GetOngoingMatchByUser = async (req) => {
        // let user_id = 
        try {
            let check_match = await match_model_1.matchModel.Match.find({ status: 0 }).populate('team1').populate('team2').exec();
            const plainMatchObjects = check_match.map(match => JSON.parse(JSON.stringify(match)));
            const matchesWithScore = plainMatchObjects.map(match => ({
                ...match,
                score: '60',
            }));
            console.log(matchesWithScore);
            return Promise.resolve(matchesWithScore);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    MatchServices.GetUpcomingMatchByUser = async (req) => {
        try {
            const pageNo = parseInt(req.query.page_no, 10) || 1;
            const pageSize = parseInt(req.query.page_size, 10) || 5;
            const totalMatches = await match_model_1.matchModel.Match.countDocuments({ status: 1 });
            let check_match = await match_model_1.matchModel.Match.find({ status: 1 }).populate('team1').populate('team2').limit(pageSize).skip((pageNo - 1) * pageSize).exec();
            const plainMatchObjects = check_match.map(match => JSON.parse(JSON.stringify(match)));
            const matchesWithScore = plainMatchObjects.map(match => ({
                ...match,
                myteam_status: Math.round(Math.random()) === 1,
            }));
            console.log(matchesWithScore);
            const total_pages = Math.ceil(totalMatches / pageSize);
            return Promise.resolve({
                matches: matchesWithScore,
                page_size: pageSize,
                total_pages: total_pages,
            });
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    MatchServices.PlayersByMatch = async (req) => {
        try {
            if (req.query.match_id) {
                var id = req.query.match_id;
                var desiredPlayerType = req.query.player_type;
                console.log(id);
                // const check_match = await matchModel.Match.findById(id).populate('team1').populate('team1players').populate('team2').populate('team2players').exec();
                const check_match = await match_model_1.matchModel.Match.findById(id).populate('team1').populate('team1players').populate('team2').populate('team2players').exec();
                let allPlayers;
                let filteredPlayers;
                if (check_match) {
                    // Use check_match safely here
                    const team1Players = check_match.team1players;
                    const team2Players = check_match.team2players;
                    allPlayers = [...(team1Players ?? []), ...(team2Players ?? [])];
                    filteredPlayers = allPlayers.filter(player => player.player_type === desiredPlayerType);
                }
                if (!check_match) {
                    return Promise.reject({
                        code: 400,
                        http_status_code: 404,
                        error: {
                            message: "Match does not exist",
                            path: "name",
                        },
                    });
                }
                return Promise.resolve(filteredPlayers);
            }
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    MatchServices.DeleteMatch = async (req) => {
        try {
            let id = req.params.id;
            const check_match = await match_model_1.matchModel.Match.deleteOne({ _id: id });
            if (check_match.deletedCount === 0) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: {
                        message: "Match does not exist",
                        path: "name",
                    },
                });
            }
            return Promise.resolve({
                message: 'Match deleted',
            });
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    MatchServices.UpdateMatch = async (req) => {
        try {
            const check_match = await match_model_1.matchModel.Match.findOne({
                _id: req.params?.id,
            });
            if (check_match) {
                const match_details = req.body;
                console.log(match_details);
                // const new_club = new clubModel.Club(club_details);
                // const save_club = await new_club.save();
                const result = await match_model_1.matchModel.Match.updateOne({ _id: req.params.id }, { $set: req.body });
                console.log(result);
                const returnmatch = await match_model_1.matchModel.Match.findById(req.params.id);
                return Promise.resolve({
                    'data': returnmatch,
                    'message': 'Match Edited Successfully',
                    'url': 'system/dashboard/matches'
                });
            }
            if (!check_match) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: {
                        message: "Match does not exist",
                        path: "name",
                    },
                });
            }
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
})(MatchServices || (exports.MatchServices = MatchServices = {}));
