"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilValidation = void 0;
var UtilValidation;
(function (UtilValidation) {
    UtilValidation.Id = async (req, res, next) => {
        const objectIdRegex = /^[0-9a-fA-F]{24}$/;
        try {
            if (!req.params.id) {
                console.log("log 1", req.params.id);
                res.status(404).json({ 'message': 'Club does not exist' });
            }
            const isValidObjectId = (id) => objectIdRegex.test(id);
            if (!isValidObjectId(req.params.id)) {
                console.log("invalid");
                res.status(404).json({ 'message': 'Invalid Id' });
            }
            next();
        }
        catch (e) {
            next(e);
        }
    };
})(UtilValidation || (exports.UtilValidation = UtilValidation = {}));
