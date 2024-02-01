"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const permission_schema_1 = require("./permission.schema");
var PermissionModel;
(function (PermissionModel) {
    PermissionModel.Permission = mongoose_1.default.model("permission", permission_schema_1.PermissionSchema.Permission);
})(PermissionModel || (exports.PermissionModel = PermissionModel = {}));
