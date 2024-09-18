import express from "express";
import cors from "cors"; // Falta la importación de cors
import server from '../config/default.js';
import ValidateRoutes from "../middlewares/index.middleware.js";
import indexRouter from "../routes/index.router.js";
import PgConection from "../services/pgConection.service.js";
import { sequelize } from "./database.js";

export default class Server {
    constructor() {
        this.port = server.port;
        this.app = express();
    }

    async initDatabase() {
        try {
            new PgConection();
            console.log('Database initialized successfully.');
        } catch (error) {
            console.error('Failed to initialize the database:', error);
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
            await sequelize.sync({ force: false });
            await this.initDatabase();
            this.middlewares();
            this.routes();
            this.app.listen(this.port);
            
        } catch (error) {
            console.error('Error starting the server:', error);
        }
    }
}
