import { Router } from "express";
import { PlayerController, PlayerValidation } from "./index.js";
import { validateRequest } from "zod-express-middleware";
import { UtilValidation } from "../../utils/index.js";

export namespace PlayerRoute {
  export const Index = Router();



  Index.get("/player", [PlayerController.GetPlayer]);
  Index.get("/player/:id", [PlayerController.GetPlayer]);
  // Index.get("/club/search", [ClubController.GetClub]);
  Index.post("/player", [validateRequest(PlayerValidation.CreatePlayer), PlayerController.CreatePlayer]);
  Index.delete("/player/:id", [UtilValidation.Id, PlayerController.DeletePlayer]);
  Index.patch("/player/:id", [PlayerController.UpdatePlayer]);



}
