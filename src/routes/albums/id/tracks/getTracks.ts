import { Request, Response } from "express";

import { SongTrack } from "../../../../models/SongTrack";
import { Album } from "../../../../models/Album";

interface Params {
  readonly id: number;
}

export const getTracks = async (request: Request, response: Response) => {
  const { id } = request.params as Params;
  const albumId = +id;
  if (Number.isNaN(+albumId)) {
    return response.end();
  }

  const album = await Album.findOne({
    where: {
      id: albumId
    },
    include: [
      {
        model: SongTrack,
        attributes: ["id", "name", "artist", "audioLink"]
      }
    ],
    attributes: ["title", "artist"]
  });

  if (album === null) {
    return response.end();
  }

  response.send(album.toJSON());
};
