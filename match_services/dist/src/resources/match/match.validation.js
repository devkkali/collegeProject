"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchValidation = void 0;
const zod_1 = require("zod");
var MatchValidation;
(function (MatchValidation) {
    MatchValidation.CreateMatch = {
        body: zod_1.z
            .object({
            team1: zod_1.z.string(),
            team2: zod_1.z.string(),
            match_time: zod_1.z.string(),
            team1players: zod_1.z.array(zod_1.z.string()),
            team2players: zod_1.z.array(zod_1.z.string())
        })
            .strict()
    };
    MatchValidation.DeleteMatch = {
        params: zod_1.z
            .object({
            id: zod_1.z.string(),
        })
            .strict()
    };
})(MatchValidation || (exports.MatchValidation = MatchValidation = {}));
