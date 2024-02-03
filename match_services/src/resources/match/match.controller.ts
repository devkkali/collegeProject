import { NextFunction, Request, Response } from "express";
import { MatchServices } from "./match.services";

export namespace MatchController {

    export const CreateMatch = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(201).json(await MatchServices.CreateMatch(req));
        } catch (e) {
            next(e);
        }
    };

    export const GetMatch = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(200).json(await MatchServices.GetMatch(req));
        } catch (e) {
            next(e);
        }
    };
    export const PlayersByMatch = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(200).json(await MatchServices.PlayersByMatch(req));
        } catch (e) {
            next(e);
        }
    };


    
    export const DeleteMatch = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(202).json(await MatchServices.DeleteMatch(req));

        } catch (e) {
            next(e);
        }
    };




    export const UpdateMatch = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(200).json(await MatchServices.UpdateMatch(req));
        } catch (e) {
            next(e);
        }
    };




}
