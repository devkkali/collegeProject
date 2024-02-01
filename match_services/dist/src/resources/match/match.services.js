"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchServices = void 0;
const match_model_1 = require("../../database/models/match/match.model");
var MatchServices;
(function (MatchServices) {
    MatchServices.CreateMatch = async (req) => {
        try {
            const match_details = req.body;
            const new_match = new match_model_1.matchModel.Match(match_details);
            const save_match = await new_match.save();
            return Promise.resolve({
                data: save_match,
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
                        error: "Match does not exist",
                    });
                }
                return Promise.resolve({
                    data: check_match,
                });
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
                        error: "Match does not exist",
                    });
                }
                return Promise.resolve(check_match);
            }
            catch (e) {
                return Promise.reject(e);
            }
        }
        try {
            const check_match = await match_model_1.matchModel.Match.find();
            return Promise.resolve(check_match);
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
                    error: "Match does not exist",
                });
            }
            return Promise.resolve({
                data: 'Match deleted',
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
                    data: returnmatch,
                });
            }
            if (!check_match) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: "Club does not exist",
                });
            }
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
})(MatchServices || (exports.MatchServices = MatchServices = {}));
