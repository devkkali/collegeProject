import { NextFunction, Request, Response } from "express";
import { PermissionModel } from "../../database/models/permission/permission.model";
export const UtilsMSApi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    type TMethod =
      | "GET"
      | "HEAD"
      | "POST"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "OPTIONS"
      | "TRACE"
      | "PATCH";

    const userDetails = res.locals.decode;
    const details = await PermissionModel.Permission.findOne({
      permission_path: req.path,
    });

    if (details && details.ms === "user") {
      req.headers['API_KEY'] = process.env.API_USER
    }
    else if (details && details.ms === "match") {
      req.headers['API_KEY'] = process.env.API_MATCH
    }
    next()

  } catch (e) {
    next(e);
  }
};
