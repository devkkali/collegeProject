"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubValidation = void 0;
const zod_1 = require("zod");
var ClubValidation;
(function (ClubValidation) {
    ClubValidation.CreateClub = {
        body: zod_1.z
            .object({
            name: zod_1.z.string(),
            image: zod_1.z.custom(),
        })
            .strict()
    };
    ClubValidation.DeleteClub = {
        params: zod_1.z
            .object({
            id: zod_1.z.string(),
        })
            .strict()
    };
})(ClubValidation || (exports.ClubValidation = ClubValidation = {}));
