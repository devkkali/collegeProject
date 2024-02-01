"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsError = void 0;
const UtilsError = async (err, req, res, next) => {
    try {
        if (err.code === 400) {
            res.status(err.http_status_code).json({
                error: err.error,
            });
        }
        else {
            res.status(500).json(err);
        }
    }
    catch (e) {
        next(e);
    }
};
exports.UtilsError = UtilsError;
