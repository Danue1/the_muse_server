import { Router } from "express";

import { getTracks } from "./getTracks";

export const tracks = Router({ mergeParams: true }).get("/", getTracks);
