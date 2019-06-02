import { Router } from "express";

import { tracks } from "./tracks";

export const id = Router({ mergeParams: true }).use("/tracks", tracks);
