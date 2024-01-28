import { NextFunction, Request, Response } from "express";

export const UtilsError = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('errorasdf:',err.code)
  try {
    if (err.code === 400) {
      res.status(err.http_status_code).json({
        ...err.error,
      });
    } else {
      res.status(500).send("Internal Server Error");
    }
  } catch (e) {
    console.log('rrrrrrrrrrrrrrrr')
    next(e);
  }
};
