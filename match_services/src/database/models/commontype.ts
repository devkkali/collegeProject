export namespace CommonType {
  export type TGender = "male" | "female" | "other";
  export type TPlayerType = "goalkipper" | "defender" | "midfielder" | "forward";
  export type TGameStatusType = -1 | 0 | 1;
  export type TRole = "admin" | "user" | "*";
  export type TString = string | null | undefined;
  export type TFileInfo = {
    fieldname: TString;
    originalname: TString;
    encoding: TString;
    mimetype: TString;
    destination: TString;
    filename: TString;
    path: TString;
    size: number;
  };

  export interface Iimage { image: [TFileInfo] }
}
