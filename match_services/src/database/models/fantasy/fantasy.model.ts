import mongoose from "mongoose";
import { Type } from "./type";
import { FantasySchema } from "./fantasy.schema";

export namespace fantasyModel {
  export const Fantasy = mongoose.model<Type.Fantasy>("fantasy_teams", FantasySchema.Fantasy);
}
