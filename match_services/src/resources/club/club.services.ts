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
        // if(req.query.id){
        //     console.log(req.query.id)
        // }
        if(req.params.id){
            var id= req.params.id
            try {
                console.log(id)
                const check_club = await clubModel.Club.findById(id);
                if(!check_club){
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
            return Promise.resolve({
                data: check_club,
            });

        } catch (e) {
            return Promise.reject(e);
        }
    };
    export const DeleteClub = async (req: Request) => {
        if(req.params.id){
            var id= req.params.id
            try {
                const check_club = await clubModel.Club.findByIdAndDelete(id);
    
            } catch (e) {
                return Promise.reject(e);
            }
        }

    };

}
