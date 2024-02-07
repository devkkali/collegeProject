import { Request } from "express";
// import jwt from "jsonwebtoken";
import { fantasyModel } from "../../database/models/fantasy/fantasy.model";

export namespace FantasyServices {



    export const CreateFantasy = async (req: Request) => {
        try {
            const fantasyDetails = req.body;

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

}
