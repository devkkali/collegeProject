import mongoose from "mongoose";
import { Type } from "./type";
import bcrypt from "bcrypt";

export namespace UserSchema {
  export const User = new mongoose.Schema<Type.User>(
    {
      username: {
        type: String,
        default: null,
      },
      first_name: {
        type: String,
        default: null,
      },
      last_name: {
        type: String,
        default: null,
      },
      dob: {
        type: String,
        default: null,
      },
      gender: {
        type: String,
        enum: ["male", "female", "other"],
        default: "male",
      },
      email: {
        type: String,
        default: null,
      },
      password: {
        type: String,
        default: null,
      },

      role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  User.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(String(this.password), 8);
    next();
  });


  User.pre("updateOne", async function(next) {
    const update = this.getUpdate() as { $set?: { password?: string } };
    console.log('pppppppppppppppp', update);
    if (!update.$set || !update.$set.password) return next();
    console.log('QQQQQQQQQQQQQQQQQ', update);
  
    update.$set.password = await bcrypt.hash(String(update.$set.password), 8);
    next();
  });
  


}
