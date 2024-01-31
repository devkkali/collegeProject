import express from "express";
import "dotenv/config";
import morgan from "morgan";
// import { ErrorMiddleware } from "./core/middlewares/error/error.middleware.js"; // import statusMonitor from 'express-status-monitor';
import cors from "cors";
import { ExpressConfig } from "./vendor";
import cookieParser from "cookie-parser";
import { RoutesPrivateRoute } from "./routes/private/routes.private.route";
import { UtilsError, UtilsMSApi, UtilsPermission } from "./utils";


class Main extends ExpressConfig {
  constructor(useCluster: boolean = false) {
    super(useCluster);
    this.middlewares();
  }

  private middlewares() {
    this.app.use(
      cors({
        origin: [
          "http://localhost:3000/api",
          "https://loan-client.vercel.app/api",
          "http://192.168.1.4:3000/api",
        ],
      })
    );

    this.app.use(cookieParser());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use("/resources",[UtilsMSApi,RoutesPrivateRoute.Index])
    this.app.use(UtilsError);
  
  }
}

const server = new Main(false);
server.start();
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Handle the error or exit the process as needed
  process.exit(1);
});
