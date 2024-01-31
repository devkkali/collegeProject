import mongoose from "mongoose";
import { Type } from "./type";

export namespace PermissionSchema {
  export const Permission = new mongoose.Schema<Type.permission>(
    {
      permission_name: {
        type: String,
        default: "example",
      },
      permission_path: {
        type: String,
        default: "/",
      },
      permission_method: {
        type: [String],
        enum: [
          "GET",
          "HEAD",
          "POST",
          "PUT",
          "DELETE",
          "CONNECT",
          "OPTIONS",
          "TRACE",
          "PATCH",
        ],
        default: ["GET"],
      },
      permission_allowed_role: {
        type: [String],
        enum: ["user", "admin"],
        default: ["*"],
      },
      permission_status: { type: String, enum: ["0", "1"] },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
}
