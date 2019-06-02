import { config as development } from "./development";
import { config as production } from "./production";

export const configs = process.env.NODE_ENV === "production" ? production : development;
