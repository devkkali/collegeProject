import mongoose from "mongoose";
import { Type } from "./type";
import { UserTypeSchema } from "./userType.schema";

export namespace userTypeModel {
  export const UserType = mongoose.model<Type.UserType>("users_types", UserTypeSchema.UserType);
}
