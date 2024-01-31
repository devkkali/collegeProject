import mongoose from "mongoose";
import { Type } from "./type";

export namespace SessionSchema {
  export const ForgotPassword = new mongoose.Schema<Type.ForgotPassword>(
    {
      session_email: {
        type: String,
      },

      session_verification_key: {
        type: String,
        default: "",
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
}
