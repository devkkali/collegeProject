import { NextFunction, Request, Response } from "express";
import { PermissionModel } from "../../database/models/permission/permission.model";
export const UtilsMSApi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('ásdfasdfasdfasdf')
  try {
    console.log('header in ms:', req.headers)
    if (process.env.MSTYPE === "gateway") {
      const details = await PermissionModel.Permission.findOne({
        permission_path: req.path,
      });


      if (details && details.ms === "user") {
        req.headers['api_key'] = process.env.API_USER
      }
      else if (details && details.ms === "match") {
        req.headers['api_key'] = process.env.API_MATCH
      }
      next()
    } else {
      console.log('api_key',req.headers)

      console.log('environment api_key',process.env.APIKEY)
      if (req.headers['api_key'] !== process.env.APIKEY) {
        console.log('api validation failed ', req.body)
        res.status(401).send({ message: "Not allowed" });
      } else {
        console.log('api validation pass', req.body)
        next()
      }
    }


  } catch (e) {
    next(e);
  }
};