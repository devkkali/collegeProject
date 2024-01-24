import { Request } from "express";
import { userModel } from "../../database/models/user/user.model";
import jwt from "jsonwebtoken";

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
        return Promise.resolve({
          data: save_user,
        });
      }
      if (check_email) {

        console.log('errorrrr')
      }
      if (check_username) {

      }
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
