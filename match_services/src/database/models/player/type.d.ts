import { CommonType } from "../commontype";

export namespace Type {
  interface Player {
    name: CommonType.TString;
    age: CommonType.TString;
    player_type: CommonType.TPlayerType;
    club_id: CommonType.TString;
  }
}
