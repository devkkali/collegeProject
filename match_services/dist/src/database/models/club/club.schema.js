"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var ClubSchema;
(function (ClubSchema) {
    ClubSchema.Club = new mongoose_1.default.Schema({
        name: {
            type: String,
            default: null,
        },
        image: {
            type: String,
            default: null,
        },
    }, {
        timestamps: true,
        versionKey: false,
    });
})(ClubSchema || (exports.ClubSchema = ClubSchema = {}));
