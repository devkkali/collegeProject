import { Router } from "express";
import {
  AuthenticationRoute,
  AuthorizationRoute,
  PermissionRoute,
} from "../../resources";
export namespace RoutesPrivateRoute {
  export const Index = Router();
  Index.use([
    AuthenticationRoute.Index,
    AuthorizationRoute.Index,
    PermissionRoute.Index,
  ]);
}
