import { Request } from "express";
import { playerModel } from "../../database/models/player/player.model";

export namespace PlayerServices {

    export const CreatePlayer = async (req: Request) => {

        try {
            const new_player = new playerModel.Player({ name: req.body.name, age: req.body.age, player_type: req.body.player_type, club_id: req.body.club_id });
            const save_player = await new_player.save();
            return Promise.resolve(
                {
                    'data':save_player,
                    'message': 'Player Created Successfully.',
                    'url': 'system/dashboard/players'
                }
            );

        } catch (e) {
            return Promise.reject(e);
        }
    };
    export const GetPlayer = async (req: Request) => {
        if (Object.keys(req.query).length > 0) {
            console.log('i am from query', req.query)
            const filter = { ...req.query }
            try {
                for (const key in filter) {
                    filter[key] = { $regex: filter[key], $options: 'i' }
                }

                const check_player = await playerModel.Player.find(filter).limit(5);



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
                return Promise.resolve(
                    check_player
                );

            } catch (e) {
                return Promise.reject(e);
            }
        }
        if (req.params.id) {
            var id = req.params.id
            try {
                console.log(id)
                const check_player = await playerModel.Player.findOne({_id:id}).populate('club_id').exec();
                
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
                return Promise.resolve(
                    check_player
                );

            } catch (e) {
                return Promise.reject(e);
            }
        }

        try {
            const check_player = await playerModel.Player.find().populate('club_id').exec();
            return Promise.resolve(
                check_player
            );

        } catch (e) {
            return Promise.reject(e);
        }
    };
    export const DeletePlayer = async (req: Request) => {

        try {
            let id = req.params.id
            const check_player = await playerModel.Player.deleteOne({ _id: id });

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
        } catch (e) {
            return Promise.reject(e);
        }

    };

    export const UpdatePlayer = async (req: Request) => {
        try {
            const check_player = await playerModel.Player.findOne({
                _id: req.params?.id,
            });

            if (check_player) {
                const player_details = req.body;

                console.log(player_details)

                // const new_club = new clubModel.Club(club_details);
                // const save_club = await new_club.save();


                const result = await playerModel.Player.updateOne({ _id: req.params.id }, { $set: req.body })
                console.log('RRRRR',result)
                const returnPlayer = await playerModel.Player.findById(req.params.id);


                return Promise.resolve(
                    {
                        'data': returnPlayer,
                        'message': 'Player Edited Successfully',
                        'url': 'system/dashboard/players'
                    }
                    
                );
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
        } catch (e) {
            return Promise.reject(e);
        }
    };
}
