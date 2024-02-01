"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const package_json_1 = require("../../../package.json");
const path_1 = require("path");
const fs_1 = require("fs");
// import log from "./logger";
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "REST API Docs",
            version: package_json_1.version,
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: getRouteFiles(),
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function swaggerDocs(app, port) {
    // console.log('asdfasdf')
    // Swagger page
    app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec, { customSiteTitle: "Match MS" }));
    // Docs in JSON format
    app.get("/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(`Docs available at http://localhost:${port}/docs`);
}
// Helper function to dynamically get all route files recursively
function getRouteFiles() {
    const resourcePath = (0, path_1.join)(__dirname, "../../resources");
    // Recursive function to find route files
    function findRouteFiles(dir) {
        const files = (0, fs_1.readdirSync)(dir).map((file) => (0, path_1.join)(dir, file));
        return files.reduce((acc, file) => {
            if ((0, fs_1.statSync)(file).isDirectory()) {
                return acc.concat(findRouteFiles(file));
            }
            else if (file.endsWith(".route.js")) { // Adjust the extension to '.route.js'
                return acc.concat(file);
            }
            return acc;
        }, []);
    }
    const routeFiles = findRouteFiles(resourcePath);
    console.log(routeFiles);
    return routeFiles;
}
exports.default = swaggerDocs;
