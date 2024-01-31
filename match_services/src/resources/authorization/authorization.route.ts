import { Router } from "express";
import { AuthorizationController, AuthorizationValidation } from "./index.js";
import { validateRequest } from "zod-express-middleware";

export namespace AuthorizationRoute {
  export const Index = Router();
  Index.post("/authorization/forgotpasswordverify", []);
}
