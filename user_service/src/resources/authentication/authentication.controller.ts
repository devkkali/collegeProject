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
    console.log('sign in from controller')
    try {
      res.status(200).json(await AuthenticationServices.SignIn(req));
    } catch (e) {
      next(e);
    }
  };


  export const GoogleSignIn = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // console.log('sign in from controller')
    try {
      res.status(200).json(await AuthenticationServices.SignInV2(req));
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

  export const Profile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.status(200).json(await AuthenticationServices.Profile(req));
    } catch (e) {
      next(e);
    }
  };
  export const ProfileUpdate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.status(200).json(await AuthenticationServices.ProfileUpdate(req));
    } catch (e) {
      next(e);
    }
  };




  export const UpdatePassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res
        .status(200)
        .json(await AuthenticationServices.UpdatePassword(req, res));
    } catch (e) {
      next(e);
    }
  };

}
