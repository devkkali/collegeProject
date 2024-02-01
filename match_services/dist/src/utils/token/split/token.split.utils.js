"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSplitUtils = void 0;
const TokenSplitUtils = async (authorizationHeader) => {
    const result = {
        bearer: undefined,
        token: undefined,
    };
    if (authorizationHeader) {
        const [bearer, ...tokenParts] = authorizationHeader.split(" ");
        result.bearer = bearer;
        result.token = tokenParts.join(" ");
    }
    return result;
};
exports.TokenSplitUtils = TokenSplitUtils;
