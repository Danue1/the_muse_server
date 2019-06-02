import { Router } from "express";

import { albums } from "./albums";

export const routes = Router({ mergeParams: true }).use("/albums", albums);
