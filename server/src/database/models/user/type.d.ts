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
  interface UserType {
    uid: CommonType.TString; // Adjust this based on your user ID type
    role: CommonType.TRole;
  }
}
