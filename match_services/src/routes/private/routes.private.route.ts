import { Router } from "express";
import {
  AuthorizationRoute,
  PermissionRoute,
  ClubRoute,
   PlayerRoute,
   MatchRoute,
   EventRoute
} from "../../resources";
// import { ClubRoute } from "../../resources/club";
export namespace RoutesPrivateRoute {
  export const Index = Router();
  Index.use([
    AuthorizationRoute.Index,
    PermissionRoute.Index,
    ClubRoute.Index,
    PlayerRoute.Index,
    MatchRoute.Index,
    EventRoute.Index
  ]);
}
