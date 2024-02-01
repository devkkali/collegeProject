"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenVerificationUtils = void 0;
const token_split_utils_1 = require("../split/token.split.utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TokenVerificationUtils = async (req, res, next) => {
    try {
        const { token } = await (0, token_split_utils_1.TokenSplitUtils)(req.headers.authorization);
        const token2 = req.cookies?.["accessToken"];
        jsonwebtoken_1.default.verify(token || token2, process.env.JWT, async (err, decoded) => {
            if (err) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 401,
                    message: "Unauthorized: Invalid token",
                });
            }
            else {
                res.locals.decode = decoded;
                next();
            }
        });
    }
    catch (e) {
        next(e);
    }
};
exports.TokenVerificationUtils = TokenVerificationUtils;
