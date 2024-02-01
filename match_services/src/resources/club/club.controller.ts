import { NextFunction, Request, Response } from "express";
import { ClubServices } from "./club.services";

export namespace ClubController {

    export const CreateClub = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(201).json(await ClubServices.CreateClub(req));
        } catch (e) {
            next(e);
        }
    };

    export const GetClub = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(200).json(await ClubServices.GetClub(req));
        } catch (e) {
            next(e);
        }
    };


    
    export const DeleteClub = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(202).json(await ClubServices.DeleteClub(req));

        } catch (e) {
            next(e);
        }
    };




    export const UpdateClub = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(200).json(await ClubServices.UpdateClub(req));
        } catch (e) {
            next(e);
        }
    };




}
