import mongoose from "mongoose";
import { Type } from "./type";

export namespace ClubSchema {
  export const Club = new mongoose.Schema<Type.Club>(
    {
      name: {
        type: String,
        default: null,
      },
      image: {
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
