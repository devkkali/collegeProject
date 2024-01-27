import mongoose from "mongoose";
import { Type } from "./type";
import { ClubSchema } from "./club.schema";

export namespace clubModel {
  export const Club = mongoose.model<Type.Club>("clubs", ClubSchema.Club);
}
