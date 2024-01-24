import { Router } from "express";
import { AuthenticationController, AuthenticationValidation } from "./index.js";
import { validateRequest } from "zod-express-middleware";

export namespace AuthenticationRoute {
  export const Index = Router();
  Index.post("/authentication/signup", [
    validateRequest(AuthenticationValidation.SignUp),
    AuthenticationController.SignUp,
  ]);
}
