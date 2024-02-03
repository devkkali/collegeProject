import mongoose from "mongoose";
import { Type } from "./type";
import { MatchActivityLogSchema } from "./matchactivitylog.schema";

export namespace matchactivitylogModel {
  export const MatchActivityLog = mongoose.model<Type.MatchActivityLog>("matchlogs", MatchActivityLogSchema.MatchActivityLog);
}
