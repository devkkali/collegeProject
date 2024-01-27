import { Request } from "express";
import { userModel } from "../../database/models/user/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userTypeModel } from "../../database/models/userType/userType.model";

export namespace AuthenticationServices {
  export const SignUp = async (req: Request) => {
    try {
      const check_email = await userModel.User.findOne({
        email: req.body?.email,
      });
      const check_username = await userModel.User.findOne({
        username: req.body?.username,
      });
      if (!check_email && !check_username) {
        const user_details = req.body;
        delete user_details?.cnf_password;
        const new_user = new userModel.User(user_details);
        const save_user = await new_user.save();


        // Create user_type entry with uid and role
        console.log(save_user._id)
        const user_type_entry = new userTypeModel.UserType({
          uid: save_user._id, // assuming _id is the user ID
          role: req.body.role, // replace with the actual role
        });
        await user_type_entry.save();

        return Promise.resolve({
          "message": "signup successful",
          "url": "/auth/sign-in"
        });

      }
      if (check_email) {
        return Promise.reject({
          code: 400,
          http_status_code: 409,
          error: {
            message: "User Email already exist",
            path: "email",
          }
        });
      }
      if (check_username) {
        return Promise.reject({
          code: 400,
          http_status_code: 409,
          error: {
            message: "Username already exist",
            path: "username"
          },
        });
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };


  export const SignIn = async (req: Request) => {
    try {
      const check_user = await userModel.User.findOne({
        $or: [{ email: req.body?.uid }, { username: req.body?.uid }],
      });
      if (check_user) {
        const match = await bcrypt.compare(
          req.body.password,
          check_user.password as string
        );
        if (!match) {
          return Promise.reject({
            code: 400,
            http_status_code: 404,
            error: {
              message: "Password not match ",
              path: "password",
            },
          });
        }

        const role = await userTypeModel.UserType.findOne({uid:check_user._id})
        console.log(role?.role)

        const accessToken = jwt.sign(
          {
            id: check_user._id,
            role: role?.role,
          },
          process.env.JWT as string,
          {
            algorithm: "HS256",
            expiresIn: "1d",
          }
        );

        return Promise.resolve({
          message: "Sign in successful ",
          token: accessToken,
          url: role?.role === "user" ? "/dashboard" : "/system/dashboard",
        });
      }
      if (!check_user) {
        return Promise.reject({
          code: 400,
          http_status_code: 409,
          error: {
            message: "User does not exist",
            path: "uid",
          },
        });
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };


}
