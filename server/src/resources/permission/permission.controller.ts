import { NextFunction, Request, Response } from "express";
import { PermissionServices } from "./permission.services";

export namespace PermissionController {
  export const AddPermission = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(200).json(await PermissionServices.AddPermission(req));
  };
}
