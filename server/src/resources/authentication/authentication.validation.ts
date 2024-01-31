import { z } from "zod";

export namespace AuthenticationValidation {
  export const SignUp = {
    body: z
      .object({
        username: z.string(),
        first_name: z.string(),
        last_name: z.string(),
        dob: z.string(),
        gender: z.enum(["male", "female", "other"]),
        email: z.string().email(),
        password: z.string(),
        cnf_password: z.string(),
        role: z.enum(["admin", "user"]).optional(),
      })
      .strict()
      .refine((data) => data.password === data.cnf_password, {
        message: "Passwords don't match",
        path: ["cnf_password"],
      }),
  };

  export const SignIn = {
    body: z
      .object({
        uid: z.string(),
        password: z.string(),
      })
      .strict(),
  };


  export const ForgotPassword = {
    body: z
      .object({
        email: z.string().email(),
      })
      .strict(),
  };




  export const SetPassword = {
    body: z
      .object({
        token: z.string(),
        new_password: z.string(),
        cnf_password: z.string(),
      })
      .strict()
      .refine((data) => data.new_password === data.cnf_password, {
        message: "Passwords don't match",
        path: ["cnf_password"],
      }),
  };
}
