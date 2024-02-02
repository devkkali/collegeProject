import { Request } from "express";
import jwt from "jsonwebtoken";
import { clubModel } from "../../database/models/club/club.model";
import { CommonType } from "../../database/models/commontype";
import { playerModel } from "../../database/models/player/player.model";
import mongoose from "mongoose";

export namespace ClubServices {

    export const CreateClub = async (req: Request) => {
        const files = req.files as unknown as CommonType.Iimage
        if (!files || !Object.keys(files).length) {
            return Promise.reject({
                code: 400,
                http_status_code: 404,
                error: {
                    message: "Image not available.",
                    path: "image",
                },
            });
        }



        // console.log(req.files?['image'][0]:[]   )

        console.log(files.image[0].destination + '' + files.image[0].filename)
        console.log(req.body)

        try {
            const check_club = await clubModel.Club.findOne({
                name: req.body?.name,
            });

            if (!check_club) {
                // const club_detailsBody = {"name"};
                // const club_details = req.files;
                // console.log(club_details)

                const new_club = new clubModel.Club({ name: req.body.name, image: `/uploads/private/images/${files.image[0].filename}` });
                const save_club = await new_club.save();
                return Promise.resolve({
                    'data': save_club,
                    'message': 'Club Created Successfully',
                    'url': 'system/dashboard/clubs'
                }
                );
            }
            if (check_club) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 409,
                    error: {
                        message: "Club already exist.",
                        path: "name",
                    },
                });
            }
        } catch (e) {
            return Promise.reject(e);
        }
    };
    export const GetClub = async (req: Request) => {
        if (Object.keys(req.query).length > 0) {
            console.log('i am from query', req.query)
            const filter = { ...req.query }
            try {
                for (const key in filter) {
                    filter[key] = { $regex: filter[key], $options: 'i' }
                }

                const check_club = await clubModel.Club.find(filter).limit(5);



                if (!check_club) {
                    return Promise.reject({
                        code: 400,
                        http_status_code: 404,
                        error: {
                            message: "Club does not exist",
                            path: "name",
                        },
                    });
                }
                return Promise.resolve(
                    check_club,
                );

            } catch (e) {
                return Promise.reject(e);
            }
        }
        if (req.params.id) {
            var id = req.params.id;
            try {
                console.log(id);
                const check_club = await clubModel.Club.findById(id);
                const check_players = await playerModel.Player.find({ club_id: id });
                console.log('check club:', check_club);

                const clubWithPlayers = {
                    _id: check_club?._id,
                    name: check_club?.name,
                    image: check_club?.image,
                    players: check_players.map((player: any) => ({
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
                        error: {
                            message: "Club does not exist",
                            path: "name",
                        },
                    });
                }
                return Promise.resolve(
                    clubWithPlayers
                );

            } catch (e) {
                return Promise.reject(e);
            }
        }


        try {
            const check_club = await clubModel.Club.find();
            return Promise.resolve(
                check_club,
            );

        } catch (e) {
            return Promise.reject(e);
        }
    };
    export const DeleteClub = async (req: Request) => {

        try {
            let id = req.params.id
            const check_club = await clubModel.Club.deleteOne({ _id: id });

            if (check_club.deletedCount === 0) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: {
                        message: "Club does not exist",
                        path: "name",
                    },
                });
            }

            return Promise.resolve({
                message: 'Club deleted',
            });
        } catch (e) {
            return Promise.reject(e);
        }

    };

    export const UpdateClub = async (req: Request) => {
        try {
            const files = req?.files as unknown as CommonType.Iimage;

            console.log(files?.image && files.image.length > 0 ? files.image[0].destination + '' + files.image[0].filename : 'No image provided');
            console.log('req', req.body);

            const updateFields: any = {};

            if (req.body.name) {
                updateFields.name = req.body.name;
            }

            if (files && files.image && files.image.length > 0) {
                updateFields.image = `/uploads/private/images/${files.image[0].filename}`;
            }

            const check_club = await clubModel.Club.findOneAndUpdate(
                { _id: req.params?.id },
                { $set: updateFields },
                { new: true }
            );

            if (check_club) {
                return Promise.resolve(
                    {
                        'data': check_club,
                        'message': 'Club Edited Successfully',
                        'url': 'system/dashboard/clubs'
                    }
                    
                );
            } else {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: {
                        message: "Club does not exist",
                        path: "name",
                    },
                });
            }
        } catch (e) {
            return Promise.reject(e);
        }
    };


}
