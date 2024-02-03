import { CommonType } from "../commontype";

export namespace Type {
  interface Event {
    player_id: CommonType.TString;
    match_id: CommonType.TString;
    no_goals: CommonType.TString;
    no_assist: CommonType.TString;
    no_yellow: CommonType.TString;
    no_red: CommonType.TString;
    no_removed: CommonType.TString;
    no_added: CommonType.TString;
    is_initial: CommonType.TString;
  }
}
