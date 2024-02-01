"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRoute = void 0;
const express_1 = require("express");
const index_js_1 = require("./index.js");
const zod_express_middleware_1 = require("zod-express-middleware");
const index_js_2 = require("../../utils/index.js");
var PlayerRoute;
(function (PlayerRoute) {
    PlayerRoute.Index = (0, express_1.Router)();
    PlayerRoute.Index.get("/player", [index_js_1.PlayerController.GetPlayer]);
    PlayerRoute.Index.get("/player/:id", [index_js_1.PlayerController.GetPlayer]);
    // Index.get("/club/search", [ClubController.GetClub]);
    PlayerRoute.Index.post("/player", [(0, zod_express_middleware_1.validateRequest)(index_js_1.PlayerValidation.CreatePlayer), index_js_1.PlayerController.CreatePlayer]);
    PlayerRoute.Index.delete("/player/:id", [index_js_2.UtilValidation.Id, index_js_1.PlayerController.DeletePlayer]);
    PlayerRoute.Index.patch("/player/:id", [index_js_1.PlayerController.UpdatePlayer]);
})(PlayerRoute || (exports.PlayerRoute = PlayerRoute = {}));
