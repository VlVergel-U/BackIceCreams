import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";


export const user = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(),
        unique: true,
      },
    password: {
        type: DataTypes.STRING(),
        unique: true,
      }
  },
  {
    timestamps: false,
  }
);