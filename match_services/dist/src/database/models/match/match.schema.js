"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var MatchSchema;
(function (MatchSchema) {
    MatchSchema.Match = new mongoose_1.default.Schema({
        team1: {
            type: mongoose_1.default.Schema.Types.ObjectId, ref: 'clubs',
            default: null,
        },
        team2: {
            type: mongoose_1.default.Schema.Types.ObjectId, ref: 'clubs',
            default: null,
        },
        match_time: {
            type: String,
            default: null
        },
        team1players: [
            { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'players' },
            { default: null }
        ],
        team2players: [
            { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'players' },
            { default: null }
        ],
        status: {
            type: String,
            enum: [-1, 0, 1],
            default: null
        }
    }, {
        timestamps: true,
        versionKey: false,
    });
})(MatchSchema || (exports.MatchSchema = MatchSchema = {}));
