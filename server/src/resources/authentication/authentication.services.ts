import { Request, Response } from "express";
import { userModel } from "../../database/models/user/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userTypeModel } from "../../database/models/userType/userType.model";
import { ForgotPasswordEmailHelper } from "../../helper";
import { SessionModel } from "../../database/models/session/session.model";
import { initializeApp } from "firebase-admin/app";
// import { getAuth } from "firebase-admin/auth";
import { error } from "console";
import { getAuth, EmailSignInProviderConfig } from "firebase-admin/auth";
import admin from "../../utils/firebase/config";



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


    console.log('***************************************user ms sign in', req)
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
            http_status_code: 401,
            error: {
              message: "Password not match ",
              path: "password",
            },
          });
        }

        const role = await userTypeModel.UserType.findOne({ uid: check_user._id })
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
          message: "Sign in successful",
          token: accessToken,
          url: role?.role === "user" ? "/dashboard" : "/system/dashboard",
        });
      }
      if (!check_user) {
        return Promise.reject({
          code: 400,
          http_status_code: 404,
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


  export const SignInV2 = async (req: Request) => {

    try {


      if (req.body?.gtoken) {
        const user = await admin.auth().verifyIdToken(req.body.gtoken);
        // user = {
        //   email: decodedToken.email,
        //   // Add other properties as needed
        // };
        console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')
        admin.auth().verifyIdToken(req.body.gtoken).then((decodedToken) => {
          const uid = decodedToken.uid
          const email = decodedToken.email
          console.log(email)
        })
          .catch((error) => {
            console.log("ssssssssssssssssssssssssssssssssssss", error)

          })

        const existingUser = await userModel.User.findOne({ email: user.email });
        // const existingUser = 


        console.log('Roshan Devkota', user)
        console.log('Roshan Devkota', existingUser)
        if (existingUser) {

          const accessToken = jwt.sign(
            {
              id: existingUser?._id,
              role: existingUser?.role,
            },
            process.env.JWT as string,
            {
              algorithm: 'HS256',
              expiresIn: '1d',
            }
          );

          return Promise.resolve({
            message: 'Sign in successful',
            token: accessToken,
            url: existingUser?.role === 'user' ? '/dashboard' : '/system/dashboard',
          });
        }
        else {
          console.log('Testing Google', user)
          const defaultRole = 'user';
          const user_details = {
            first_name: user?.name,
            email: user?.email,
            role: defaultRole
          }
          const new_user = new userModel.User(user_details);
          const save_user = await new_user.save();
          const user_type_entry = new userTypeModel.UserType({
            uid: save_user._id, // assuming _id is the user ID
            role: defaultRole, // replace with the actual role
          });
          await user_type_entry.save();


          const accessToken = jwt.sign(
            {
              id: save_user._id,
              role: defaultRole,
            },
            process.env.JWT as string,
            {
              algorithm: 'HS256',
              expiresIn: '1d',
            }
          );

          return Promise.resolve({
            message: 'Sign in successful',
            token: accessToken,
            url: defaultRole === 'user' ? '/dashboard' : '/system/dashboard',
          });
        }
      } else {

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
              http_status_code: 401,
              error: {
                message: "Password not match ",
                path: "password",
              },
            });
          }

          const role = await userTypeModel.UserType.findOne({ uid: check_user._id })

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
            message: "Sign in successful",
            token: accessToken,
            url: role?.role === "user" ? "/dashboard" : "/system/dashboard",
          });
        }
        if (!check_user) {
          return Promise.reject({
            code: 400,
            http_status_code: 404,
            error: {
              message: "User does not exist",
              path: "uid",
            },
          });
        }
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };


  export const ForgotPassword = async (req: Request) => {
    console.log('RRRROOOORORORORO', req.body)

    try {
      const check_email = await userModel.User.findOne({
        email: req.body?.email,
      });

      if (check_email) {
        const check_forgot_password_session =
          await SessionModel.ForgotPassword.findOne({
            session_email: check_email.email,
          });

        const forgot_password_token = jwt.sign(
          {
            user_id: check_email._id,
            email: check_email.email,
          },
          process.env.JWT as string,
          {
            algorithm: "HS256",
            expiresIn: "1d",
          }
        );
        if (!check_forgot_password_session) {
          const new_session_forgot_password = new SessionModel.ForgotPassword({
            session_email: check_email.email,
            session_verification_key: forgot_password_token,
          });

          const save_session_forgot_password =
            await new_session_forgot_password.save();

          await ForgotPasswordEmailHelper({
            user_email: save_session_forgot_password.session_email as string,
            verification_token:
              save_session_forgot_password.session_verification_key as string,
          });
        }
        await ForgotPasswordEmailHelper({
          user_email: check_forgot_password_session?.session_email as string,
          verification_token:
            check_forgot_password_session?.session_verification_key as string,
        });
        return Promise.resolve({
          message: "Forgot Password Email Sent On your Email Address",
        });
      }
      return Promise.reject({
        code: 400,
        http_status_code: 409,
        error: {
          message: "User does not exist",
          path: "email",
        },
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };




  export const SetPassword = async (req: Request) => {
    try {
      return jwt.verify(
        req.body.token,
        process.env.JWT as string,
        async (err: any, decoded: any) => {
          if (err) {
            return Promise.reject({
              code: 400,
              http_status_code: 406,
              error: {
                message: "Token not acceptable",
                path: "token",
              },
            });
          } else {
            const { email } = decoded;
            await userModel.User.updateOne(
              { email: email },
              { $set: { password: req.body.new_password } }
            );

            return Promise.resolve({
              message: "Password updated successfully",
            });
          }
        }
      );
    } catch (e) {
      return Promise.reject(e);
    }
  };





  export const Users = async (req: Request) => {
    console.log('head', req.headers)
    try {
      const check_user = await userModel.User.find()
      console.log("users", check_user)
      if (check_user)
        return Promise.resolve({
          message: 'success',
          data: check_user
        });


      if (!check_user) {
        return Promise.reject({
          code: 400,
          http_status_code: 404,
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

  export const Profile = async (req: Request) => {
    // console.log('headassssssssssssssssssssssssssssssssss', req.query.id)
    try {
      const check_user = await userModel.User.findById(req.query.id).select('-password')
      console.log("users", check_user)
      if (check_user)
        return Promise.resolve({
          message: 'success',
          data: check_user
        });


      if (!check_user) {
        return Promise.reject({
          code: 400,
          http_status_code: 404,
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
  export const ProfileUpdate = async (req: Request) => {
    console.log('headassssssssssssssssssssssssssssssssss', req.query.id)
    try {
      const check_player = await userModel.User.findOne({
        _id: req.query.id,
      });

      if (check_player) {
        const user_details = req.body;

        console.log(user_details)

        // const new_club = new clubModel.Club(club_details);
        // const save_club = await new_club.save();


        const result = await userModel.User.updateOne({ _id: req.query.id }, { $set: req.body })
        console.log('RRRRR', result)
        const returnUser = await userModel.User.findById(req.query.id).select('-password');


        return Promise.resolve(
          {
            'data': returnUser,
            'message': 'User Edited Successfully',
            'url': '/dashboard/details'
          }

        );
      }
      if (!check_player) {
        return Promise.reject({
          code: 400,
          http_status_code: 404,
          error: {
            message: "Player does not exist",
            path: "name",
          },
        });
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };
  export const UpdatePassword = async (req: Request, res: Response) => {
    try {
      console.log("hello");
      const userDetails = res.locals.decode;
      console.log(userDetails);
      const check_user = await userModel.User.findById(userDetails.id);
      console.log(check_user);
      if (check_user) {
        const match = await bcrypt.compare(
          req.body.current_password,
          check_user.password as string
        );
        if (!match) {
          return Promise.reject({
            code: 400,
            http_status_code: 409,
            error: "Password not match ",
          });
        }

        const hashedPassword = await bcrypt.hash(req.body.new_password, 8);

        await check_user.updateOne({
          password: hashedPassword,
        });
        return Promise.resolve({
          message: "Password Updated",
        });
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
