import { NextFunction, Request, Response } from "express";
import { PermissionModel } from "../../database/models/permission/permission.model";
export const UtilsMSApi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("process.env.MSTYPE",process.env.MSTYPE)
    if (process.env.MSTYPE === "gateway") {
      const details = await PermissionModel.Permission.findOne({
        permission_path: req.path,
      });

      if (details && details.ms === "user") {
        req.headers = {
          'api_key': process.env.API_USER,
          'Content-Type': 'application/json',
          'Authorization': req.headers.authorization
        }
        // req.headers['api_key'] = process.env.API_USER
      }
      else if (details && details.ms === "match") {
        req.headers['api_key'] = process.env.API_MATCH
      }
    } else {
      if (process.env.APIKEY !== req.headers['api_key']) {
        res.status(400).send("Not allowed");
      }
    }

    next()

  } catch (e) {
    next(e);
  }
};