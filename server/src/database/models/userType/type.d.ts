import { CommonType } from "../commontype";

export namespace Type {
  interface UserType {
    uid: CommonType.TString; // Adjust this based on your user ID type
    role: CommonType.TRole;
  }
}
