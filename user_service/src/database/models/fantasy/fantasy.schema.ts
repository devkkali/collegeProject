import mongoose from "mongoose";
import { Type } from "./type";

export namespace FantasySchema {
  export const Fantasy = new mongoose.Schema<Type.Fantasy>(
    {
      team_name: {
        type: String,
        default: null,
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
      match_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
      },
      players: [
        { type: mongoose.Schema.Types.ObjectId },
        { default: null }
      ],
       score: {
        type: String,
        default: null,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
}
