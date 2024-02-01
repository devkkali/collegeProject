"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseConfig = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongooseConfig {
    mongoose;
    constructor() {
        this.mongoose = mongoose_1.default;
        this.connectToDatabase().then((r) => r);
    }
    async connectToDatabase() {
        const dbUri = process.env.DATABASEURL;
        const options = {
            dbName: process.env.DATABASENAME,
        };
        try {
            await this.mongoose.connect(dbUri, options);
            console.log("Connected to MongoDB");
        }
        catch (error) {
            console.error(`MongoDB connection error: ${error}`);
        }
        this.mongoose.connection.on("error", (err) => {
            console.error(`MongoDB connection error: ${err}`);
        });
        this.mongoose.connection.on("disconnected", () => {
            console.log("Disconnected from MongoDB");
        });
        process.on("SIGINT", async () => {
            try {
                await this.mongoose.connection.close();
                console.log("MongoDB connection closed through app termination");
                process.exit(0);
            }
            catch (err) {
                console.error(`Error closing MongoDB connection: ${err}`);
                process.exit(1);
            }
        });
    }
}
exports.MongooseConfig = MongooseConfig;
