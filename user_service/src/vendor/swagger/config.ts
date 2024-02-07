import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../../package.json";
import { join } from "path";
import { readdirSync, statSync } from "fs";
// import log from "./logger";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version,
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

const swaggerSpec = swaggerJsdoc(options);

export function swaggerDocs(app: Express, port: number) {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec,{customSiteTitle:"User MS"}));

  // Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`User Docs available at http://localhost:${port}/docs`);
}




// Helper function to dynamically get all route files recursively
function getRouteFiles(): string[] {
  const resourcePath = join(__dirname, "../../resources");  
  // Recursive function to find route files
  function findRouteFiles(dir: string): string[] {
    const files = readdirSync(dir).map((file) => join(dir, file));
    
    return files.reduce((acc, file) => {
      if (statSync(file).isDirectory()) {
        return acc.concat(findRouteFiles(file));
      } else if (file.endsWith(".route.js")) { // Adjust the extension to '.route.js'
        return acc.concat(file);
      }
      return acc;
    }, [] as string[]);
  }

  const routeFiles = findRouteFiles(resourcePath);
  return routeFiles;
}




export default swaggerDocs;