import { CommonType } from "../commontype";

export namespace Type {
  interface Fantasy {
    team_name?: CommonType.TString;
    user_id: CommonType.TString;
    match_id: CommonType.TString;
    players: [CommonType.TString]
    score?: CommonType.TString
  }
}
