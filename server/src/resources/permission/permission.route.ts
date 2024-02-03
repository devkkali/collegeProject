import { Router } from "express";
import { validateRequest } from "zod-express-middleware";
import { PermissionController } from "./permission.controller";
import { PermissionValidation } from "./permission.validation";

export namespace PermissionRoute {
  export const Index = Router();
  Index.post("/permission/addbulk", [
    validateRequest(PermissionValidation.Add),
    PermissionController.AddPermission,
  ]);
}
