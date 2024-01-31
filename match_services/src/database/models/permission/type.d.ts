import { CommonType, TRole } from "../commontype";

export namespace Type {
  interface permission {
    permission_name: CommonType.TString;
    permission_path: CommonType.TString;
    permission_method: Array<
      | "GET"
      | "HEAD"
      | "POST"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "OPTIONS"
      | "TRACE"
      | "PATCH"
    >;
    permission_allowed_role: Array<TRole>;
    permission_status: "0" | "1";
  }
}
