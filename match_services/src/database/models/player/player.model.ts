import mongoose from "mongoose";
import { Type } from "./type";
import { PlayerSchema } from "./player.schema";

export namespace playerModel {
  export const Player = mongoose.model<Type.Player>("players", PlayerSchema.Player);
}
