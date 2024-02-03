"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesPrivateRoute = void 0;
const express_1 = require("express");
const resources_1 = require("../../resources");
// import { ClubRoute } from "../../resources/club";
var RoutesPrivateRoute;
(function (RoutesPrivateRoute) {
    RoutesPrivateRoute.Index = (0, express_1.Router)();
    RoutesPrivateRoute.Index.use([
        resources_1.AuthorizationRoute.Index,
        resources_1.PermissionRoute.Index,
        resources_1.ClubRoute.Index,
        resources_1.PlayerRoute.Index,
        resources_1.MatchRoute.Index,
        resources_1.EventRoute.Index
    ]);
})(RoutesPrivateRoute || (exports.RoutesPrivateRoute = RoutesPrivateRoute = {}));
