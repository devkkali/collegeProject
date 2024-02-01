import { NextFunction, Request, Response } from "express";

export const UtilsPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user_route = ["/authentication/signup"];
    const admin = ["/authentication/signup"];
    if (user_route.includes(req.path)) {
      console.log(req.path);
      next();
    }
  } catch (e) {
    next(e);
  }
};
