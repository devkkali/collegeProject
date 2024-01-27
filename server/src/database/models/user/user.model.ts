import mongoose from "mongoose";
import { Type } from "./type";
import { UserSchema } from "./user.schema";

export namespace userModel {
  export const User = mongoose.model<Type.User>("users", UserSchema.User);
}
