import { NextFunction, Request, Response } from "express";
import { TokenSplitUtils } from "../split/token.split.utils";
import jwt from "jsonwebtoken";

export const TokenVerificationUtils = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    const { token } = await TokenSplitUtils(req.headers.authorization);
    const token2 = req.cookies?.["accessToken"];

    jwt.verify(
      token || token2,
      process.env.JWT as string,
      async (err: any, decoded: any) => {
        if (err) {
          return Promise.reject({
            code: 400,
            http_status_code: 401,
            message: "Unauthorized: Invalid token",
          });
        } else {
          res.locals.decode = decoded;
          next();
        }
      }
    );
  } catch (e) {
    next(e);
  }
};
