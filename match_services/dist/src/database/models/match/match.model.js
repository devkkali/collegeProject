"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const match_schema_1 = require("./match.schema");
var matchModel;
(function (matchModel) {
    matchModel.Match = mongoose_1.default.model("matches", match_schema_1.MatchSchema.Match);
})(matchModel || (exports.matchModel = matchModel = {}));
