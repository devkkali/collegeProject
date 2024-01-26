import { NextFunction, Request, Response } from "express";
import { PermissionModel } from "../../database/models/permission/permission.model";
export const UtilsPermission = async (
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

    const publicPaths = [
      "/authentication/signup",
      "/authentication/signin",
      "/authentication/forgotpassword",
      "/authentication/setpassword",
    ];

    if (publicPaths.includes(req.path)) {
      next();
      return;
    }

    const userDetails = res.locals.decode;
    const details = await PermissionModel.Permission.findOne({
      permission_path: req.path,
    });

    if (
      details &&
      details.permission_allowed_role.includes(userDetails.role) &&
      details.permission_method.includes(req.method as TMethod) &&
      details.permission_status === "1"
    ) {
      next();
    } else {
      res.status(400).send("Not allowed");
    }
  } catch (e) {
    next(e);
  }
};
