import { Router } from "express";
import { FantasyController, FantasyValidation } from ".";
import { validateRequest } from "zod-express-middleware";


export namespace FantasyRoute {
  export const Index = Router();
  // Index.get("/user/history", [MatchController.GetUserHistory]);
  // Index.get("/match/scoreboard", [MatchController.GetMatchScoreBoard]);


  // Index.get("/user/ongoing_match", [MatchController.GetOngoingMatchByUser]);

  // Index.get("/user/upcoming_match", [MatchController.GetUpcomingMatchByUser]);
  
  // Index.get("/match", [MatchController.GetMatch]);
  // Index.get("/match/:id", [MatchController.GetMatch]);
  // // Index.get("/club/search", [ClubController.GetClub]);
  
 

  // Index.get("/current_match_players/:id", [MatchController.PlayersByMatch]);


  Index.get("/user/fantasy_team", [ FantasyController.GetFantasy]);
  Index.post("/user/fantasy_team", [validateRequest(FantasyValidation.CreateFantasy), FantasyController.CreateFantasy]);
  // Index.delete("/match/:id", [UtilValidation.Id, MatchController.DeleteMatch]);
  // Index.patch("/match/:id", [MatchController.UpdateMatch]);



}
