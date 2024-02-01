import { MongooseConfig } from "../mongoose/config.js";
import express, { Express } from "express";
import cluster from "cluster";
import os from "os";
import swaggerDocs from "../swagger/config.js";

export class ExpressConfig extends MongooseConfig {
  public app: Express;
  private readonly useCluster: boolean;
  constructor(useCluster: boolean = false) {
    super();
    this.app = express();
    this.useCluster = useCluster;
  }
  public start(): void {
    if (this.useCluster && cluster.isPrimary) {
      const numCPUs = os.cpus().length;

      console.log(`Master ${process.pid} is running`);

      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }

      cluster.on("listening", (worker) => {
        console.log(`Worker ${worker.process.pid} listening`);
      });
      cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
      });
    } else {
      const port = process.env.PORT || 4000;

      this.app.listen(port, () => {
        // console.log('aaaa')
        swaggerDocs(this.app, Number(port))
        console.log(`Server is running on port ${port}`);
      });
    }
  }
}
