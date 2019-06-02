import dotenv from "dotenv";
import Path from "path";

dotenv.config({ path: Path.join(__dirname, "../local.env") });

import { createServer } from "./server";

const run = async () => {
  const server = await createServer();

  const PORT = 8080;
  server.listen(PORT, () => console.log(`::: SERVER RUNNING on ${PORT} port :::`));
};

run();
