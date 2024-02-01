import api from "@/services/config";
import { AuthenticationServicesType } from "@/services/authentication/type";
import { AxiosError } from "axios";

export namespace AuthenticationServices {
  export const SignIn = async (
    data: AuthenticationServicesType.SignInProps
  ): Promise<AuthenticationServicesType.SignInRes> => {
    try {
      const res = await api.post("/authentication/signin", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
  export const SignInWithGoogle = async (
    data: AuthenticationServicesType.GoogleSignInProps
  ): Promise<AuthenticationServicesType.SignInRes> => {
    console.log('data',data)
    try {
      const res = await api.post("/authentication/googlesignin", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
  export const SignUp = async (
    data: AuthenticationServicesType.SignUpProps
  ): Promise<AuthenticationServicesType.SignUpRes> => {
    try {
      const res = await api.post("/authentication/signup", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
  export const ForgotPassword = async (
    data: AuthenticationServicesType.ForgotPasswordProps
  ): Promise<AuthenticationServicesType.ForgotPasswordRes> => {
    try {
      const res = await api.post("/authentication/forgotpassword", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
  export const SetNewPassword = async (
    data: AuthenticationServicesType.ForgotPasswordProps
  ): Promise<AuthenticationServicesType.ForgotPasswordRes> => {
    try {
      const res = await api.post("/authentication/forgotpassword", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
}
