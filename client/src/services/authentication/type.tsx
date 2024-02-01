export namespace AuthenticationServicesType {
  export interface SignInProps {
    username: string;
    password: string;
  }
  export interface GoogleSignInProps {
    email: string;
    token: string;
  }
  export interface SignInRes {
    message: string;
    url: string;
    token: string;
  }
  export interface SignUpProps {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    gender: "male" | "female" | "other";
    dob: string;
    password: string;
    cnf_password: string;
  }
  export interface SignUpRes {
    message: string;
    url: string;
  }
  export interface ForgotPasswordProps {
    email: string;
  }
  export interface ForgotPasswordRes {
    message: string;
    url: string;
  }
}
