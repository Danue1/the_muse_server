import { Router } from "express";

import { id } from "./id";

import { getAlbums } from "./getAlbums";

export const albums = Router({ mergeParams: true })
  .use("/:id", id)
  .get("/", getAlbums);
