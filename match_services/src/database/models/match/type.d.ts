import { CommonType } from "../commontype";

export namespace Type {
  interface Match {
    team1: CommonType.TString;
    team2: CommonType.TString;
    match_time: CommonType.TString;
    team1players: [CommonType.TString]
    team2players: [CommonType.TString]
    status: CommonType.TString
  }
  interface ScoreExtendedMatch extends Match {
    team1: CommonType.TString;
    team2: CommonType.TString;
    match_time: CommonType.TString;
    team1players: [CommonType.TString]
    team2players: [CommonType.TString]
    status: CommonType.TString
    score?: CommonType.TString
    myteam_status?: Boolean
  }
}
