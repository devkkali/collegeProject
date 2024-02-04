import { Router } from "express";
import { validateRequest } from "zod-express-middleware";
import { UtilValidation } from "../../utils/index.js";
import { MatchController } from "./match.controller.js";
import { MatchValidation } from "./match.validation.js";

export namespace MatchRoute {
  export const Index = Router();
  Index.get("/user/history", [MatchController.GetUserHistory]);
  Index.get("/match/scoreboard", [MatchController.GetMatchScoreBoard]);


  Index.get("/user/ongoing_match", [MatchController.GetOngoingMatchByUser]);

  Index.get("/user/upcoming_match", [MatchController.GetUpcomingMatchByUser]);
  
  Index.get("/match", [MatchController.GetMatch]);
  Index.get("/match/:id", [MatchController.GetMatch]);
  // Index.get("/club/search", [ClubController.GetClub]);
  
  
    /**
 * @openapi
 * paths:
 *   /api/current_match_players:
 *     get:
 *       tags:
 *         - Match Controller
 *       summary: Get players list by match
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - team1
 *                 - team2
 *                 - team1players
 *                 - team2players
 *                 - dateTime
 *               properties:
 *                 team1:
 *                   type: string
 *                   example: 'ClubA'
 *                 team2:
 *                   type: string
 *                   example: 'ClubB'
 *                 team1players:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ['player1', 'player2']
 *                 team2players:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ['player3', 'player4']
 *                 dateTime:
 *                   type: string
 *                   format: date-time
 *                   example: '2024-01-22T12:00:00Z'
 *       responses:
 *         201:
 *           description: Created
 *         500:
 *           description: Internal Server Error
 */

  Index.get("/current_match_players", [MatchController.PlayersByMatch]);


  /**
 * @openapi
 * paths:
 *   /api/matches:
 *     post:
 *       tags:
 *         - Match Controller
 *       summary: Insert a new match
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - team1
 *                 - team2
 *                 - team1players
 *                 - team2players
 *                 - dateTime
 *               properties:
 *                 team1:
 *                   type: string
 *                   example: 'ClubA'
 *                 team2:
 *                   type: string
 *                   example: 'ClubB'
 *                 team1players:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ['player1', 'player2']
 *                 team2players:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ['player3', 'player4']
 *                 dateTime:
 *                   type: string
 *                   format: date-time
 *                   example: '2024-01-22T12:00:00Z'
 *       responses:
 *         201:
 *           description: Created
 *         500:
 *           description: Internal Server Error
 */

  Index.post("/match", [validateRequest(MatchValidation.CreateMatch), MatchController.CreateMatch]);
  Index.delete("/match/:id", [UtilValidation.Id, MatchController.DeleteMatch]);
  Index.patch("/match/:id", [MatchController.UpdateMatch]);



}
