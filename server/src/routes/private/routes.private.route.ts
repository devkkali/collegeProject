import { Router } from "express";
import { AuthenticationRoute } from "../../resources";
export namespace RoutesPrivateRoute {
  export const Index = Router();
  Index.use([AuthenticationRoute.Index]);
}
