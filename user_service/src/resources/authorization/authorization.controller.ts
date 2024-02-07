import { NextFunction, Request, Response } from "express";
import { AuthorizationServices } from "./authorization.services";

export namespace AuthorizationController {
  export const ForgotPasswordVerify = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res
        .status(200)
        .json(await AuthorizationServices.ForgotPasswordVerify(req));
    } catch (e) {
      next(e);
    }
  };
}
