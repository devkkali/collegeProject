import mongoose from "mongoose";
import { Type } from "./type";
import { UserSchema } from "./user.schema";

export namespace userModel {
  export const User = mongoose.model<Type.User>("users", UserSchema.User);
  export const UserType = mongoose.model<Type.UserType>("users_types", UserSchema.UserType);
}
