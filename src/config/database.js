import { Sequelize } from "sequelize";
import config from './default';

const { dbConfig } = config;

export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "postgres",
  }
);
