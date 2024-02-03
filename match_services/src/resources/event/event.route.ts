import { Router } from "express";
import { validateRequest } from "zod-express-middleware";
import { UtilValidation } from "../../utils/index.js";
import { EventController, EventValidation } from "./index.js";


export namespace EventRoute {
  export const Index = Router();



  // Index.get("/event", [MatchController.GetMatch]);
  Index.get("/event/:id", [EventController.GetEventsMatch]);
  // Index.get("/club/search", [ClubController.GetClub]);





  /**
 * @openapi
 * paths:
 *   /resources/event:
 *     post:
 *       tags:
 *         - event Controller
 *       summary: Insert a new event
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

  Index.post("/event", [validateRequest(EventValidation.CreateEvent), EventController.CreateEvent]);
  // Index.delete("/match/:id", [UtilValidation.Id, EventController.DeleteEvent]);





  // Index.patch("/match/:id", [MatchController.UpdateMatch]);



}
