import { NextFunction, Request, Response } from "express";
import { FantasyServices } from "./fantasy.services";

export namespace FantasyController {

    // export const GetUserHistory = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) => {
    //     try {
    //         res.status(201).json(await FantasyServices.GetUserHistory(req));
    //     } catch (e) {
    //         next(e);
    //     }
    // };
    // export const GetMatchScoreBoard = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) => {
    //     try {
    //         res.status(201).json(await FantasyServices.GetMatchScoreBoard(req));
    //     } catch (e) {
    //         next(e);
    //     }
    // };

    export const CreateFantasy = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(201).json(await FantasyServices.CreateFantasy(req));
        } catch (e) {
            next(e);
        }
    };



    export const GetFantasy = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(200).json(await FantasyServices.GetFantasy(req));
        } catch (e) {
            next(e);
        }
    };
    // export const GetOngoingMatchByUser = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) => {
    //     try {
    //         res.status(200).json(await FantasyServices.GetOngoingMatchByUser(req));
    //     } catch (e) {
    //         next(e);
    //     }
    // };
    // export const GetUpcomingMatchByUser = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) => {
    //     try {
    //         res.status(200).json(await FantasyServices.GetUpcomingMatchByUser(req));
    //     } catch (e) {
    //         next(e);
    //     }
    // };
    // export const PlayersByMatch = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) => {
    //     try {
    //         res.status(200).json(await FantasyServices.PlayersByMatch(req));
    //     } catch (e) {
    //         next(e);
    //     }
    // };


    
    // export const DeleteMatch = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) => {
    //     try {
    //         res.status(202).json(await FantasyServices.DeleteMatch(req));

    //     } catch (e) {
    //         next(e);
    //     }
    // };




    // export const UpdateMatch = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) => {
    //     try {
    //         res.status(200).json(await FantasyServices.UpdateMatch(req));
    //     } catch (e) {
    //         next(e);
    //     }
    // };




}
