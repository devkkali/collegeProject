"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressConfig = void 0;
const config_js_1 = require("../mongoose/config.js");
const express_1 = __importDefault(require("express"));
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
class ExpressConfig extends config_js_1.MongooseConfig {
    app;
    useCluster;
    constructor(useCluster = false) {
        super();
        this.app = (0, express_1.default)();
        this.useCluster = useCluster;
    }
    start() {
        if (this.useCluster && cluster_1.default.isPrimary) {
            const numCPUs = os_1.default.cpus().length;
            console.log(`Master ${process.pid} is running`);
            for (let i = 0; i < numCPUs; i++) {
                cluster_1.default.fork();
            }
            cluster_1.default.on("listening", (worker) => {
                console.log(`Worker ${worker.process.pid} listening`);
            });
            cluster_1.default.on("exit", (worker, code, signal) => {
                console.log(`Worker ${worker.process.pid} died`);
            });
        }
        else {
            const port = process.env.PORT || 9000;
            this.app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        }
    }
}
exports.ExpressConfig = ExpressConfig;
