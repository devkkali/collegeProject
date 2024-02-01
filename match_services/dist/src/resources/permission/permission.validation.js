"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionValidation = void 0;
const zod_1 = require("zod");
var PermissionValidation;
(function (PermissionValidation) {
    PermissionValidation.Add = {
        body: zod_1.z
            .object({
            permissions: zod_1.z.array(zod_1.z
                .object({
                permission_name: zod_1.z.string(),
                permission_path: zod_1.z.string(),
                permission_method: zod_1.z.array(zod_1.z.enum([
                    "GET",
                    "HEAD",
                    "POST",
                    "PUT",
                    "DELETE",
                    "CONNECT",
                    "OPTIONS",
                    "TRACE",
                    "PATCH",
                ])),
                permission_allowed_role: zod_1.z.array(zod_1.z.enum(["admin", "user", "*"])),
                permission_status: zod_1.z.enum(["0", "1"]),
            })
                .strict()),
        })
            .strict(),
    };
})(PermissionValidation || (exports.PermissionValidation = PermissionValidation = {}));
