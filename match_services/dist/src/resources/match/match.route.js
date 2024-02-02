"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchRoute = void 0;
const express_1 = require("express");
const zod_express_middleware_1 = require("zod-express-middleware");
const index_js_1 = require("../../utils/index.js");
const match_controller_js_1 = require("./match.controller.js");
const match_validation_js_1 = require("./match.validation.js");
var MatchRoute;
(function (MatchRoute) {
    MatchRoute.Index = (0, express_1.Router)();
    MatchRoute.Index.get("/match", [match_controller_js_1.MatchController.GetMatch]);
    MatchRoute.Index.get("/match/:id", [match_controller_js_1.MatchController.GetMatch]);
    // Index.get("/club/search", [ClubController.GetClub]);
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
    MatchRoute.Index.post("/match", [(0, zod_express_middleware_1.validateRequest)(match_validation_js_1.MatchValidation.CreateMatch), match_controller_js_1.MatchController.CreateMatch]);
    MatchRoute.Index.delete("/match/:id", [index_js_1.UtilValidation.Id, match_controller_js_1.MatchController.DeleteMatch]);
    MatchRoute.Index.patch("/match/:id", [match_controller_js_1.MatchController.UpdateMatch]);
})(MatchRoute || (exports.MatchRoute = MatchRoute = {}));
