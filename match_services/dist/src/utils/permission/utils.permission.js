"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsPermission = void 0;
const permission_model_1 = require("../../database/models/permission/permission.model");
const UtilsPermission = async (req, res, next) => {
    try {
        const publicPaths = [
            "/authentication/signup",
            "/authentication/signin",
            "/authentication/forgotpassword",
            "/authentication/setpassword",
        ];
        if (publicPaths.includes(req.path)) {
            next();
            return;
        }
        const userDetails = res.locals.decode;
        const details = await permission_model_1.PermissionModel.Permission.findOne({
            permission_path: req.path,
        });
        if (details &&
            details.permission_allowed_role.includes(userDetails.role) &&
            details.permission_method.includes(req.method) &&
            details.permission_status === "1") {
            next();
        }
        else {
            res.status(400).send("Not allowed");
        }
    }
    catch (e) {
        next(e);
    }
};
exports.UtilsPermission = UtilsPermission;
