"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const morgan_1 = __importDefault(require("morgan"));
// import { ErrorMiddleware } from "./core/middlewares/error/error.middleware.js"; // import statusMonitor from 'express-status-monitor';
const cors_1 = __importDefault(require("cors"));
const vendor_1 = require("./vendor");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const utils_permission_1 = require("./utils/permission/utils.permission");
const routes_private_route_1 = require("./routes/private/routes.private.route");
class Main extends vendor_1.ExpressConfig {
    constructor(useCluster = false) {
        super(useCluster);
        this.middlewares();
    }
    middlewares() {
        this.app.use((0, cors_1.default)({
            origin: [
                "http://localhost:3000/api",
                "https://loan-client.vercel.app/api",
                "http://192.168.1.4:3000/api",
            ],
        }));
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use("/resources", [utils_permission_1.UtilsPermission, routes_private_route_1.RoutesPrivateRoute.Index]);
    }
}
const server = new Main(false);
server.start();
