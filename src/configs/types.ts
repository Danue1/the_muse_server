import { Dialect } from "./Dialect";

export interface Config {
  Database: {
    database: string;
    username: string;
    password: string;
    host: string;
    port: number;
    dialect: Dialect;
    pool: {
      min: number;
      max: number;
      idle: number;
    };
    logging: boolean | ((sql: string, timing?: number) => void);
    modelPaths: [string];
  };
}
