"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubImage = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const Filter = {
    modules: {
        one: {
            filter: (req, file, cb) => {
                const allowedExtensions = ['.png', '.jpg', '.jpeg'];
                const fileExtension = path_1.default.extname(file.originalname).toLowerCase();
                if (allowedExtensions.includes(fileExtension)) {
                    cb(null, true);
                }
                else {
                    cb(new Error('Invalid file extension'));
                }
            },
            fileSize: 10 * 1024 * 1024,
            storage: multer_1.default.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, './uploads/private/images/');
                },
                filename: function (req, file, cb) {
                    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
                    const fileExtension = path_1.default.extname(file.originalname).toLowerCase();
                    if (['.png', '.jpg', '.jpeg'].includes(fileExtension)) {
                        cb(null, `${uniqueSuffix}${fileExtension}`);
                    }
                    else {
                        cb(new Error('Invalid file extension'), '');
                    }
                },
            }),
        }
    },
};
exports.ClubImage = (0, multer_1.default)({
    storage: Filter.modules.one.storage,
    ...Filter.modules.one.filter,
    limits: {
        fileSize: Filter.modules.one.fileSize,
    },
});
