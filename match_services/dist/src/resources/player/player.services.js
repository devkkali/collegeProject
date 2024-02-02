"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerServices = void 0;
const player_model_1 = require("../../database/models/player/player.model");
var PlayerServices;
(function (PlayerServices) {
    PlayerServices.CreatePlayer = async (req) => {
        try {
            const new_player = new player_model_1.playerModel.Player({ name: req.body.name, age: req.body.age, player_type: req.body.player_type, club_id: req.body.club_id });
            const save_player = await new_player.save();
            return Promise.resolve(save_player);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    PlayerServices.GetPlayer = async (req) => {
        if (Object.keys(req.query).length > 0) {
            console.log('i am from query', req.query);
            const filter = { ...req.query };
            try {
                for (const key in filter) {
                    filter[key] = { $regex: filter[key], $options: 'i' };
                }
                const check_player = await player_model_1.playerModel.Player.find(filter).limit(5);
                if (!check_player) {
                    return Promise.reject({
                        code: 400,
                        http_status_code: 404,
                        error: {
                            message: "Player does not exist",
                            path: "name",
                        },
                    });
                }
                return Promise.resolve(check_player);
            }
            catch (e) {
                return Promise.reject(e);
            }
        }
        if (req.params.id) {
            var id = req.params.id;
            try {
                console.log(id);
                const check_player = await player_model_1.playerModel.Player.findOne({ _id: id }).populate('club_id').exec();
                if (!check_player) {
                    return Promise.reject({
                        code: 400,
                        http_status_code: 404,
                        error: {
                            message: "Player does not exist",
                            path: "name",
                        },
                    });
                }
                return Promise.resolve(check_player);
            }
            catch (e) {
                return Promise.reject(e);
            }
        }
        try {
            const check_player = await player_model_1.playerModel.Player.find();
            return Promise.resolve(check_player);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    PlayerServices.DeletePlayer = async (req) => {
        try {
            let id = req.params.id;
            const check_player = await player_model_1.playerModel.Player.deleteOne({ _id: id });
            if (check_player.deletedCount === 0) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: {
                        message: "Player does not exist",
                        path: "name",
                    },
                });
            }
            return Promise.resolve({
                message: 'Player deleted',
            });
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    PlayerServices.UpdatePlayer = async (req) => {
        try {
            const check_player = await player_model_1.playerModel.Player.findOne({
                _id: req.params?.id,
            });
            if (check_player) {
                const player_details = req.body;
                console.log(player_details);
                // const new_club = new clubModel.Club(club_details);
                // const save_club = await new_club.save();
                const result = await player_model_1.playerModel.Player.updateOne({ _id: req.params.id }, { $set: req.body });
                console.log(result);
                const returnPlayer = await player_model_1.playerModel.Player.findById(req.params.id);
                return Promise.resolve(returnPlayer);
            }
            if (!check_player) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: {
                        message: "Player does not exist",
                        path: "name",
                    },
                });
            }
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
})(PlayerServices || (exports.PlayerServices = PlayerServices = {}));
