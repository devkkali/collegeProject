import { CommonType } from "../commontype";

export namespace Type {
  interface User {
    username: CommonType.TString;
    first_name: CommonType.TString;
    last_name: CommonType.TString;
    dob: CommonType.TString;
    gender: CommonType.TGender;
    email: CommonType.TString;
    password: CommonType.TString;
    role: CommonType.TRole;
  }
}
