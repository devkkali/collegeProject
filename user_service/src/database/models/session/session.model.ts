import mongoose from "mongoose";
import { Type } from "./type";
import { SessionSchema } from "./session.schema";

export namespace SessionModel {
  export const ForgotPassword = mongoose.model<Type.ForgotPassword>(
    "session_forgot_password",
    SessionSchema.ForgotPassword
  );
}
