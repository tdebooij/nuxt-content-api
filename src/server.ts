// Types
import express, { Express } from "express";

import { OPTIONS, ModuleOptions } from "./options";

import content from "./routes/content";

// Create and return an express app,
// The app will be added as middleware to nuxt by our module
export const createContentApiServer = (options: ModuleOptions): Express => {
  const app: Express = express();

  // Set the global module options
  app.set(OPTIONS, options);

  // Our routes
  app.use(content);

  return app;
};
