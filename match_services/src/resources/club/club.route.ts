import { Router } from "express";
import { ClubController, ClubValidation } from "./index.js";
import { validateRequest } from "zod-express-middleware";

export namespace ClubRoute {
  export const Index = Router();



  Index.get("/club", [ClubController.GetClub]);
  Index.get("/club/:id", [ClubController.GetClub]);
  Index.post("/club", [validateRequest(ClubValidation.CreateClub), ClubController.CreateClub]);
  Index.delete("/club/:id", [ClubController.DeleteClub]);



}
