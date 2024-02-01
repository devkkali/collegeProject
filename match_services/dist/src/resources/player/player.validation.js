"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerValidation = void 0;
const zod_1 = require("zod");
var PlayerValidation;
(function (PlayerValidation) {
    PlayerValidation.CreatePlayer = {
        body: zod_1.z
            .object({
            name: zod_1.z.string(),
            age: zod_1.z.string(),
            player_type: zod_1.z.enum(["goalkipper", "defender", "midfielder", "forward"]),
            club_id: zod_1.z.string(),
            status: zod_1.z.enum(["-1", "0", "1"])
        })
            .strict()
    };
    PlayerValidation.DeletePlayer = {
        params: zod_1.z
            .object({
            id: zod_1.z.string(),
        })
            .strict(),
    };
})(PlayerValidation || (exports.PlayerValidation = PlayerValidation = {}));
