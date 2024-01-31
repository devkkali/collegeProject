import { Router } from "express";
import { ClubController, ClubValidation } from "./index.js";
import { validateRequest } from "zod-express-middleware";
import { UtilValidation } from "../../utils/index.js";

export namespace ClubRoute {
  export const Index = Router();



  Index.get("/club", [ClubController.GetClub]);
  Index.get("/club/:id", [ClubController.GetClub]);
  // Index.get("/club/search", [ClubController.GetClub]);
  Index.post("/club", [validateRequest(ClubValidation.CreateClub), ClubController.CreateClub]);
  Index.delete("/club/:id", [UtilValidation.Id, ClubController.DeleteClub]);
  Index.patch("/club/:id", [ClubController.UpdateClub]);



}
