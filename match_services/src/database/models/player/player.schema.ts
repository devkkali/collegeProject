import mongoose from "mongoose";
import { Type } from "./type";

export namespace PlayerSchema {
  export const Player = new mongoose.Schema<Type.Player>(
    {
      name: {
        type: String,
        default: null,
      },
      age: {
        type: String,
        default: null,
      },
      player_type: {
        type: String,
        default: null,
      },
      club_id: {
        type: mongoose.Schema.Types.ObjectId,ref:'clubs' ,
        default: null
      }
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
}
