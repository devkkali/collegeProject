import { Request, Response, NextFunction } from "express";
import { AuthenticationServices } from "./authentication.services";

export namespace AuthenticationController {
  export const SignUp = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.status(201).json(await AuthenticationServices.SignUp(req));
    } catch (e) {
      next(e);
    }
  };

}
