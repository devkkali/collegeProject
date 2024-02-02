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
        default: null,
      },
      no_assist: {
        type: String,
        default: null
      },
      no_yellow: {
        type: String,
        default: null
      },
      no_red: {
        type: String,
        default: null
      },
      no_removed: {
        type: String,
        default: null
      },
      no_added: {
        type: String,
        default: null
      },
      is_initial: {
        type: String,
        default: null
      }
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
}
