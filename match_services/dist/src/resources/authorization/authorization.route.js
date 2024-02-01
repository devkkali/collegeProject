"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationRoute = void 0;
const express_1 = require("express");
var AuthorizationRoute;
(function (AuthorizationRoute) {
    AuthorizationRoute.Index = (0, express_1.Router)();
    AuthorizationRoute.Index.post("/authorization/forgotpasswordverify", []);
})(AuthorizationRoute || (exports.AuthorizationRoute = AuthorizationRoute = {}));
