"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var PermissionSchema;
(function (PermissionSchema) {
    PermissionSchema.Permission = new mongoose_1.default.Schema({
        permission_name: {
            type: String,
            default: "example",
        },
        permission_path: {
            type: String,
            default: "/",
        },
        permission_method: {
            type: [String],
            enum: [
                "GET",
                "HEAD",
                "POST",
                "PUT",
                "DELETE",
                "CONNECT",
                "OPTIONS",
                "TRACE",
                "PATCH",
            ],
            default: ["GET"],
        },
        permission_allowed_role: {
            type: [String],
            enum: ["user", "admin"],
            default: ["*"],
        },
        permission_status: { type: String, enum: ["0", "1"] },
    }, {
        timestamps: true,
        versionKey: false,
    });
})(PermissionSchema || (exports.PermissionSchema = PermissionSchema = {}));
