import { Request } from "express";
// import jwt from "jsonwebtoken";
import { clubModel } from "../../database/models/club/club.model";
import { matchModel } from "../../database/models/match/match.model";

export namespace MatchServices {

    export const CreateMatch = async (req: Request) => {
        try {
            const match_details = req.body;
            const new_match = new matchModel.Match(match_details);
            const save_match = await new_match.save();
            return Promise.resolve(
                {
                    'data': save_match,
                    'message': 'Match Created Successfully',
                    'url': 'system/dashboard/matches'
                }
            );

        } catch (e) {
            return Promise.reject(e);
        }
    };



    export const GetMatch = async (req: Request) => {
        if (Object.keys(req.query).length > 0) {
            console.log('i am from query', req.query)
            const filter = { ...req.query }
            try {
                for (const key in filter) {
                    filter[key] = { $regex: filter[key], $options: 'i' }
                }

                const check_match = await matchModel.Match.find(filter).limit(5);



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
                return Promise.resolve(
                    check_match
                );

            } catch (e) {
                return Promise.reject(e);
            }
        }
        if (req.params.id) {
            var id = req.params.id
            try {
                console.log(id)
                const check_match = await matchModel.Match.findById(id).populate('team1').populate('team1players').populate('team2').populate('team2players').exec();
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
                return Promise.resolve(
                    check_match
                );

            } catch (e) {
                return Promise.reject(e);
            }
        }

        try {
            const check_match = await matchModel.Match.find();
            return Promise.resolve(
                check_match
            );

        } catch (e) {
            return Promise.reject(e);
        }
    };

    export const DeleteMatch = async (req: Request) => {

        try {
            let id = req.params.id
            const check_match = await matchModel.Match.deleteOne({ _id: id });

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
        } catch (e) {
            return Promise.reject(e);
        }

    };

    export const UpdateMatch = async (req: Request) => {
        try {
            const check_match = await matchModel.Match.findOne({
                _id: req.params?.id,
            });

            if (check_match) {
                const match_details = req.body;

                console.log(match_details)

                // const new_club = new clubModel.Club(club_details);
                // const save_club = await new_club.save();


                const result = await matchModel.Match.updateOne({ _id: req.params.id }, { $set: req.body })
                console.log(result)
                const returnmatch = await matchModel.Match.findById(req.params.id);


                return Promise.resolve(
                    {
                        'data': returnmatch,
                        'message': 'Match Edited Successfully',
                        'url': 'system/dashboard/matches'
                    }
                    
                );
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
        } catch (e) {
            return Promise.reject(e);
        }
    };
}
