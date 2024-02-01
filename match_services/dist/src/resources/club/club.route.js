"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubRoute = void 0;
const express_1 = require("express");
const index_js_1 = require("./index.js");
const zod_express_middleware_1 = require("zod-express-middleware");
const index_js_2 = require("../../utils/index.js");
const config_js_1 = require("../../vendor/multer/config.js");
var ClubRoute;
(function (ClubRoute) {
    ClubRoute.Index = (0, express_1.Router)();
    ClubRoute.Index.get("/club", [index_js_1.ClubController.GetClub]);
    ClubRoute.Index.get("/club/:id", [index_js_1.ClubController.GetClub]);
    // Index.get("/club/search", [ClubController.GetClub]);
    // Index.post("/club", [validateRequest(ClubValidation.CreateClub), ClubController.CreateClub]);
    ClubRoute.Index.delete("/club/:id", [index_js_2.UtilValidation.Id, index_js_1.ClubController.DeleteClub]);
    ClubRoute.Index.patch("/club/:id", [config_js_1.ClubImage.fields([
            { name: 'image', maxCount: 1 }
        ]), index_js_1.ClubController.UpdateClub]);
    ClubRoute.Index.post('/club', [
        config_js_1.ClubImage.fields([
            { name: 'image', maxCount: 1 }
        ]), (0, zod_express_middleware_1.validateRequest)(index_js_1.ClubValidation.CreateClub), index_js_1.ClubController.CreateClub
    ]);
})(ClubRoute || (exports.ClubRoute = ClubRoute = {}));
