import mongoose from "mongoose";
import { Type } from "./type";

export namespace MatchActivityLogSchema {
  export const MatchActivityLog = new mongoose.Schema<Type.MatchActivityLog>(
    {
      player_id: {
        type: mongoose.Schema.Types.ObjectId,ref:'players',
        default: null,
      },
      match_id: {
        type: mongoose.Schema.Types.ObjectId,ref:'matchs',
        default: null,
      },
      event_type: {
        type: String,
        default: null,
      }

    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
}
