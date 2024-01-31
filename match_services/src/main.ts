import express from "express";
import "dotenv/config";
import morgan from "morgan";
// import { ErrorMiddleware } from "./core/middlewares/error/error.middleware.js"; // import statusMonitor from 'express-status-monitor';
import cors from "cors";
import { ExpressConfig } from "./vendor";
import { RoutesPrivateRoute } from "./routes";
import { UtilsError } from "./utils";
// import { TokenVerificationUtils, UtilsError } from "./utils";
// import { UtilsPermission } from "./utils/permission/utils.permission";

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

    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use("/resources",[RoutesPrivateRoute.Index])
    // this.app.use("/uploads", express.static("./uploads"));
    // this.app.use("/resources", [
    //   TokenVerificationUtils,
    //   UtilsPermission,
    //   RoutesPrivateRoute.Index,
    // ]);
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
