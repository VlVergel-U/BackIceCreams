import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";


export const ice_creams = sequelize.define(
  "ice_creams",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    flavor: {
      type: DataTypes.STRING(40),
    },
    price: {
      type: DataTypes.DOUBLE(10, 2),
    },
    company: {
      type: DataTypes.STRING(20),
    },
    type: {
        type: DataTypes.STRING(20),
      }
  },
  {
    timestamps: false,
  }
);