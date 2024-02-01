"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var PlayerSchema;
(function (PlayerSchema) {
    PlayerSchema.Player = new mongoose_1.default.Schema({
        name: {
            type: String,
            default: null,
        },
        age: {
            type: String,
            default: null,
        },
        player_type: {
            type: String,
            default: null,
        },
        club_id: {
            type: mongoose_1.default.Schema.Types.ObjectId, ref: 'clubs',
            default: null
        }
    }, {
        timestamps: true,
        versionKey: false,
    });
})(PlayerSchema || (exports.PlayerSchema = PlayerSchema = {}));
