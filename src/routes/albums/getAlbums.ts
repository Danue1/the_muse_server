import { Request, Response } from "express";

import { Album } from "../../models/Album";

export const getAlbums = async (request: Request, response: Response) => {
  const albums = await Album.findAll({
    limit: 4
  });

  response.send(albums.map(album => album.toJSON()));
};
