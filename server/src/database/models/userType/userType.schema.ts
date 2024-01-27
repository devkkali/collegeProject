import mongoose from "mongoose";
import { Type } from "./type";

export namespace UserTypeSchema {
  export const UserType = new mongoose.Schema<Type.UserType>(
    {
      uid: {
        type: String,
        default: null,
      },
      role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
}
