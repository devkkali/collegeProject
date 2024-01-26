import mongoose from "mongoose";
import { Type } from "./type";
import { PermissionSchema } from "./permission.schema";

export namespace PermissionModel {
  export const Permission = mongoose.model<Type.permission>(
    "permission",
    PermissionSchema.Permission
  );
}
