import * as Yup from "yup";

export const SignInSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
}).strict();

export type SignInSchemaType = Yup.InferType<typeof SignInSchema>;

export const SignUpSchema = Yup.object({
  username: Yup.string().required(),
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  dob: Yup.string().required(),
  gender: Yup.string().oneOf(["male", "female", "other"]).required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  cnf_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required(),
}).strict();

export type SignUpSchemaType = Yup.InferType<typeof SignUpSchema>;

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string().email().required(),
}).strict();
export type ForgotPasswordSchemaType = Yup.InferType<
  typeof ForgotPasswordSchema
>;
