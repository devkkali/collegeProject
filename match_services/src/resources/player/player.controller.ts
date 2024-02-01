import { NextFunction, Request, Response } from "express";
import { PlayerServices } from "./player.services";

export namespace PlayerController {

    export const CreatePlayer = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(201).json(await PlayerServices.CreatePlayer(req));
        } catch (e) {
            next(e);
        }
    };

    export const GetPlayer = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(200).json(await PlayerServices.GetPlayer(req));
        } catch (e) {
            next(e);
        }
    };



    export const DeletePlayer = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(202).json(await PlayerServices.DeletePlayer(req));

        } catch (e) {
            next(e);
        }
    };




    export const UpdatePlayer = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(200).json(await PlayerServices.UpdatePlayer(req));
        } catch (e) {
            next(e);
        }
    };




}
