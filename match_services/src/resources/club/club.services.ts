import { Request } from "express";
import jwt from "jsonwebtoken";
import { clubModel } from "../../database/models/club/club.model";

export namespace ClubServices {

    export const CreateClub = async (req: Request) => {
        try {
            const check_club = await clubModel.Club.findOne({
                name: req.body?.name,
            });

            if (!check_club) {
                const club_details = req.body;
                const new_club = new clubModel.Club(club_details);
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
                        error: "Club does not exist",
                    });
                }
                return Promise.resolve({
                    data: check_club,
                });

            } catch (e) {
                return Promise.reject(e);
            }
        }
        if (req.params.id) {
            var id = req.params.id
            try {
                console.log(id)
                const check_club = await clubModel.Club.findById(id);
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
                    error: "Club does not exist",
                });
            }

            return Promise.resolve({
                data: 'Item deleted',
            });
        } catch (e) {
            return Promise.reject(e);
        }

    };

    export const UpdateClub = async (req: Request) => {
        try {
            const check_club = await clubModel.Club.findOne({
                _id: req.params?.id,
            });

            if (check_club) {
                const club_details = req.body;

                console.log(club_details)

                // const new_club = new clubModel.Club(club_details);
                // const save_club = await new_club.save();


                const result = await clubModel.Club.updateOne({ _id: req.params.id }, { $set: req.body })
                console.log(result)
                const returnClub = await clubModel.Club.findById(req.params.id);


                return Promise.resolve({
                    data: returnClub,
                });
            }
            if (!check_club) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 404,
                    error: "Club does not exist",
                });
            }
        } catch (e) {
            return Promise.reject(e);
        }
    };
}
