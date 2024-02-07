import { Request } from "express";
import { SessionModel } from "../../database/models/session/session.model";
import jwt from "jsonwebtoken";

export namespace AuthorizationServices {
  export const ForgotPasswordVerify = async (req: Request) => {
    try {
      const check_token = await SessionModel.ForgotPassword.findOne({
        session_verification_key: req.body.token,
      });
      if (!check_token) {
        return Promise.reject({
          code: 400,
          http_status_code: 406,
          error: "Token not acceptable",
        });
      }
      const token = jwt.sign(
        {
          email: check_token.session_email,
        },
        process.env.JWT as string,
        {
          algorithm: "HS256",
          expiresIn: "1d",
        }
      );
      await SessionModel.ForgotPassword.deleteOne({
        session_email: check_token.session_email,
      });

      return Promise.resolve({
        token: token,
        urlPath: "/onboarding/pcr/pull-report",
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
