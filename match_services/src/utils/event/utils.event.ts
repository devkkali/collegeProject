import { NextFunction, Request, Response } from "express";

export const UtilsEvent = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (err.code === 400) {
      res.status(err.http_status_code).json({
        ...err.error,
      });
    } else {
      res.status(500).json(err);
    }
  } catch (e) {
    next(e);
  }
};
