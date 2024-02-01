import mongoose from "mongoose";
import { Type } from "./type";
import { MatchSchema } from "./match.schema";

export namespace matchModel {
  export const Match = mongoose.model<Type.Match>("matches", MatchSchema.Match);
}
