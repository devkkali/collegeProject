import mongoose from "mongoose";
import { Type } from "./type";

export namespace MatchSchema {
  export const Match = new mongoose.Schema<Type.Match>(
    {
      team1: {
        type: mongoose.Schema.Types.ObjectId, ref: 'clubs',
        default: null,
      },
      team2: {
        type: mongoose.Schema.Types.ObjectId, ref: 'clubs',
        default: null,
      },
      match_time: {
        type: String,
        default: null
      },
      team1players: [

        { type: mongoose.Schema.Types.ObjectId, ref: 'players' },
        { default: null }
      ],
      team2players: [

        { type: mongoose.Schema.Types.ObjectId, ref: 'players' },
        { default: null }
      ],
      status:{
        type:String,
        enum: [-1,0,1],
        default:null
      }
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
}
