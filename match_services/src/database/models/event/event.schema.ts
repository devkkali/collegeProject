import mongoose from "mongoose";
import { Type } from "./type";

export namespace EventSchema {
  export const Event = new mongoose.Schema<Type.Event>(
    {
      player_id: {
        type: String,
        default: null,
      },
      match_id: {
        type: String,
        default: null,
      },
      no_goals: {
        type: String,
        default: 0
      },
      no_assist: {
        type: String,
        default: 0
      },
      no_yellow: {
        type: String,
        default: 0
      },
      no_red: {
        type: String,
        default: 0
      },
      no_removed: {
        type: String,
        default: 0
      },
      no_added: {
        type: String,
        default: 0
      },
      is_initial: {
        type: String,
        default: 0
      }
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
}
