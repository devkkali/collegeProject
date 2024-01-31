import { CommonType } from "../commontype";

export namespace Type {
  interface ForgotPassword {
    session_email: CommonType.TString;
    session_verification_key: CommonType.TString;
  }
}
