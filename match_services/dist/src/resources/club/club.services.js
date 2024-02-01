"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubServices = void 0;
const club_model_1 = require("../../database/models/club/club.model");
const player_model_1 = require("../../database/models/player/player.model");
var ClubServices;
(function (ClubServices) {
    ClubServices.CreateClub = async (req) => {
        const files = req.files;
        if (!files || !Object.keys(files).length) {
            return Promise.reject({
                code: 400,
                http_status_code: 404,
                error: 'Files not available',
            });
        }
        // console.log(req.files?['image'][0]:[]   )
        console.log(files.image[0].destination + '' + files.image[0].filename);
        console.log(req.body);
        try {
            const check_club = await club_model_1.clubModel.Club.findOne({
                name: req.body?.name,
            });
            if (!check_club) {
                // const club_detailsBody = {"name"};
                // const club_details = req.files;
                // console.log(club_details)
                const new_club = new club_model_1.clubModel.Club({ name: req.body.name, image: `/uploads/private/images/${files.image[0].filename}` });
                const save_club = await new_club.save();
                return Promise.resolve({
                    data: save_club,
                });
            }
            if (check_club) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 409,
                    error: "Club already exist",
                });
            }
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    ClubServices.GetClub = async (req) => {
        if (Object.keys(req.query).length > 0) {
            console.log('i am from query', req.query);
            const filter = { ...req.query };
            try {
                for (const key in filter) {
                    filter[key] = { $regex: filter[key], $options: 'i' };
                }
                const check_club = await club_model_1.clubModel.Club.find(filter).limit(5);
                if (!check_club) {
                    return Promise.reject({
                        code: 400,
                        http_status_code: 404,
                        error: "Club does not exist",
                    });
                }
                return Promise.resolve({
                    data: check_club,
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
                const check_club = await club_model_1.clubModel.Club.findById(id);
                const check_players = await player_model_1.playerModel.Player.find({ club_id: id });
                console.log('check club:', check_club);
                const clubWithPlayers = {
                    _id: check_club?._id,
                    name: check_club?.name,
                    image: check_club?.image,
                    players: check_players.map((player) => ({
                        _id: player?._id,
                        name: player?.name,
                        age: player?.age,
                        player_type: player?.player_type,
                    })),
                };
                if (!check_club) {
                    return Promise.reject({
                        code: 400,
                        http_status_code: 404,
                        error: "Club does not exist",
                    });
                }
                return Promise.resolve({
                    data: clubWithPlayers,
                });
            }
            catch (e) {
                return Promise.reject(e);
            }
        }
        try {
            const check_club = await club_model_1.clubModel.Club.find();
            return Promise.resolve(check_club);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    ClubServices.DeleteClub = async (req) => {
        try {
            let id = req.params.id;
            const check_club = await club_model_1.clubModel.Club.deleteOne({ _id: id });
            if (check_club.deletedCount === 0) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: "Club does not exist",
                });
            }
            return Promise.resolve({
                data: 'Club deleted',
            });
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    ClubServices.UpdateClub = async (req) => {
        try {
            const files = req?.files;
            console.log(files?.image && files.image.length > 0 ? files.image[0].destination + '' + files.image[0].filename : 'No image provided');
            console.log('req', req.body);
            const updateFields = {};
            if (req.body.name) {
                updateFields.name = req.body.name;
            }
            if (files && files.image && files.image.length > 0) {
                updateFields.image = `/uploads/private/images/${files.image[0].filename}`;
            }
            const check_club = await club_model_1.clubModel.Club.findOneAndUpdate({ _id: req.params?.id }, { $set: updateFields }, { new: true });
            if (check_club) {
                return Promise.resolve({
                    data: check_club,
                });
            }
            else {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: 'Club does not exist',
                });
            }
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
})(ClubServices || (exports.ClubServices = ClubServices = {}));
