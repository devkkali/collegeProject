import { Request } from "express";
import { userModel } from "../../database/models/user/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userTypeModel } from "../../database/models/userType/userType.model";
import { ForgotPasswordEmailHelper } from "../../helper";
import { SessionModel } from "../../database/models/session/session.model";
// import { initializeApp } from "firebase-admin/app";



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
    // const app = initializeApp();


    console.log('user ms sign in', req)
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


  // export const SignInV2 = async (req: Request) => {
  //   console.log('user ms sign in', req)

  //   try {



  //     if (req.body?.googleToken) {
  //       // const googleClient = new OAuth2Client('YOUR_GOOGLE_CLIENT_ID'); // Replace with your Google Client ID

  //       const ticket = await googleClient.verifyIdToken({
  //         idToken: req.body.googleToken,
  //         audience: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
  //       });

  //       const googleUser = ticket.getPayload();

  //       // Check if the Google user already exists in your system
  //       const existingUser = await userModel.User.findOne({ email: googleUser?.email });

  //       if (existingUser) {
  //         const role = await userTypeModel.UserType.findOne({ uid: existingUser._id });

  //         const accessToken = jwt.sign(
  //           {
  //             id: existingUser._id,
  //             role: role?.role,
  //           },
  //           process.env.JWT as string,
  //           {
  //             algorithm: 'HS256',
  //             expiresIn: '1d',
  //           }
  //         );

  //         return Promise.resolve({
  //           message: 'Sign in successful',
  //           token: accessToken,
  //           url: role?.role === 'user' ? '/dashboard' : '/system/dashboard',
  //         });
  //       } else {
  //         // Create a new user in your system based on Google login
  //         // You might want to add additional logic here to determine the user's role
  //         // and other details based on the Google user information
  //         const newUser = await userModel.User.create({
  //           email: googleUser?.email,
  //           // Add other user details as needed
  //         });

  //         // Assume the default role is 'user' for new Google sign-ins
  //         const defaultRole = 'user';

  //         const newRole = await userTypeModel.UserType.create({
  //           uid: newUser._id,
  //           role: defaultRole,
  //         });

  //         const accessToken = jwt.sign(
  //           {
  //             id: newUser._id,
  //             role: newRole?.role,
  //           },
  //           process.env.JWT as string,
  //           {
  //             algorithm: 'HS256',
  //             expiresIn: '1d',
  //           }
  //         );

  //         return Promise.resolve({
  //           message: 'Sign in successful',
  //           token: accessToken,
  //           url: newRole?.role === 'user' ? '/dashboard' : '/system/dashboard',
  //         });
  //       }
  //     } else {










  //       const check_user = await userModel.User.findOne({
  //         $or: [{ email: req.body?.uid }, { username: req.body?.uid }],
  //       });
  //       if (check_user) {
  //         const match = await bcrypt.compare(
  //           req.body.password,
  //           check_user.password as string
  //         );
  //         if (!match) {
  //           return Promise.reject({
  //             code: 400,
  //             http_status_code: 401,
  //             error: {
  //               message: "Password not match ",
  //               path: "password",
  //             },
  //           });
  //         }

  //         const role = await userTypeModel.UserType.findOne({ uid: check_user._id })

  //         const accessToken = jwt.sign(
  //           {
  //             id: check_user._id,
  //             role: role?.role,
  //           },
  //           process.env.JWT as string,
  //           {
  //             algorithm: "HS256",
  //             expiresIn: "1d",
  //           }
  //         );

  //         return Promise.resolve({
  //           message: "Sign in successful",
  //           token: accessToken,
  //           url: role?.role === "user" ? "/dashboard" : "/system/dashboard",
  //         });
  //       }
  //       if (!check_user) {
  //         return Promise.reject({
  //           code: 400,
  //           http_status_code: 404,
  //           error: {
  //             message: "User does not exist",
  //             path: "uid",
  //           },
  //         });
  //       }
  //     }
  //   } catch (e) {
  //     return Promise.reject(e);
  //   }
  // };


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

}
