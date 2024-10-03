import express from "express";
import cors from "cors";
import server from '../config/default.js';
import ValidateRoutes from "../middlewares/index.middleware.js";
import indexRouter from "../routes/index.router.js";
import PgConection from "../services/pgConection.service.js";
import { sequelize } from "./database.js";
import { createAdmin } from "../libs/createAdmin.js";
import { ice_creams } from "../models/ice_cream.model.js";
import { user } from "../models/user.model.js";

export default class Server {
    constructor() {
        this.port = server.port;
        this.app = express();
    }

    async initDatabase() {
        try {
            new PgConection();
            console.log('Base de datos iniciada correctamente');
        } catch (error) {
            console.error('Error al iniciar base de datos:', error);
        }
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(ValidateRoutes);
    }

    routes() {
        this.app.use(indexRouter);
        this.app.use(
            cors({
                origin: "http://localhost:5173",
            })
        );
    }

    async runServer() {
        try {
            await sequelize.sync({ force: true });
            await createAdmin();
            await this.initDatabase();
            this.middlewares();
            this.routes();
            this.app.listen(this.port);
            
        } catch (error) {
            console.error('Error al iniciar servidor:', error);
        }
    }
}
