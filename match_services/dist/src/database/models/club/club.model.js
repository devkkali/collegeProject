"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clubModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const club_schema_1 = require("./club.schema");
var clubModel;
(function (clubModel) {
    clubModel.Club = mongoose_1.default.model("clubs", club_schema_1.ClubSchema.Club);
})(clubModel || (exports.clubModel = clubModel = {}));
