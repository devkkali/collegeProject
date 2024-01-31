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




  export const SignIn = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.status(200).json(await AuthenticationServices.SignIn(req));
    } catch (e) {
      next(e);
    }
  };



  export const ForgotPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.status(200).json(await AuthenticationServices.ForgotPassword(req));
    } catch (e) {
      next(e);
    }
  };



  export const SetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.status(200).json(await AuthenticationServices.SetPassword(req));
    } catch (e) {
      next(e);
    }
  };


  

  export const Users = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.status(200).json(await AuthenticationServices.Users(req));
    } catch (e) {
      next(e);
    }
  };

}
