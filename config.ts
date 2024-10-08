/* eslint-disable no-undef */
import "dotenv/config";
import { ConfigType } from "./src/@types/types";
import EnvConfig from "./src/constants/env.config";

const dbConfig: ConfigType[] = [
  {
    host: EnvConfig.POSTGRES_DB_HOST,
    db_name: EnvConfig.POSTGRES_DB_NAME,
    user: EnvConfig.POSTGRES_DB_USER,
    password: EnvConfig.POSTGRES_DB_PASSWORD,
    port: EnvConfig.POSTGRES_DB_PORT,
    type: "postgres",
  },
  {
    host: EnvConfig.MYSQL_DB_HOST,
    db_name: EnvConfig.MYSQL_DB_NAME,
    user: EnvConfig.MYSQL_DB_USER,
    password: EnvConfig.MYSQL_DB_PASSWORD,
    port: EnvConfig.MYSQL_DB_PORT,
    type: "mysql",
  },
  // add multiple databases here
];

export default dbConfig;
