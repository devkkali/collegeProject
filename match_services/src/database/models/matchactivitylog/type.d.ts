import { CommonType } from "../commontype";
import {Type} from "../player/type"
export namespace Type {
  interface MatchActivityLog {
    player_id: Type.Player; 
    match_id: CommonType.TString;
    event_type: CommonType.TEventsType
  }
}
