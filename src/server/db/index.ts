import { Sequelize, Model } from "sequelize-typescript";

import { configs } from "../../configs";

import { Album } from "../../models/Album";
import { SongTrack } from "../../models/SongTrack";

export const initializeDatabase = async () => {
  await connectToDatabase();
  await initializeSchema();
};

const connectToDatabase = async () => {
  await createDatabaseIfNotExists();

  // create Connection Pool
  new Sequelize(configs.Database);
};

const createDatabaseIfNotExists = async () => {
  const config = { ...configs.Database, database: "" };
  const database = new Sequelize(config);

  const query = `
    CREATE DATABASE IF NOT EXISTS ${configs.Database.database}
    default CHARACTER SET utf8mb4 default COLLATE utf8mb4_general_ci;
  `;

  await database.query(query);
  await database.close();
};

const initializeSchema = async () => {
  interface Schema {
    readonly sync: typeof Model[];
    readonly async: typeof Model[];
  }

  const schema: Schema = {
    sync: [Album],
    async: [SongTrack]
  };

  for (const scheme of schema.sync) {
    await scheme.sync();
  }

  await Promise.all(schema.async.map(scheme => scheme.sync()));
};
