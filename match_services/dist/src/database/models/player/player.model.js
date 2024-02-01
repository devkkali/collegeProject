"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const player_schema_1 = require("./player.schema");
var playerModel;
(function (playerModel) {
    playerModel.Player = mongoose_1.default.model("players", player_schema_1.PlayerSchema.Player);
})(playerModel || (exports.playerModel = playerModel = {}));
