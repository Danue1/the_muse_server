import Express from "express";
import cors from "cors";

import { initializeDatabase } from "./db";
import { routes } from "../routes";

export const createServer = async () => {
  await initializeDatabase();

  const app = Express();

  app.use(cors());

  return app.use("/", routes);
};
