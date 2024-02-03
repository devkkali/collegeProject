import { NextFunction, Request, Response } from "express";
import { EventServices } from ".";

export namespace EventController {

    export const CreateEvent = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(201).json(await EventServices.CreateEvent(req));
        } catch (e) {
            next(e);
        }
    };

    export const GetEventsMatch = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(200).json(await EventServices.GetEventsMatch(req));
        } catch (e) {
            next(e);
        }
    };


    
    // export const DeleteEvent = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) => {
    //     try {
    //         res.status(202).json(await EventServices.DeleteMatch(req));

    //     } catch (e) {
    //         next(e);
    //     }
    // };





}
