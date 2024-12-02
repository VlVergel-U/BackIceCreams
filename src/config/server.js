import express from "express";
import cors from "cors";
import server from '../config/default.js';
import ValidateRoutes from "../middlewares/index.middleware.js";
import indexRouter from "../routes/index.routes.js";
import PgConection from "../services/pgConection.service.js";
import { sequelize } from "./database.js";
import { createAdmin } from "../libs/createAdmin.js";
import { ice_creams } from "../models/ice_cream.model.js"; //NO BORRAR
import { createIceCreams } from "../libs/createIceCreams.js";

export default class Server {
    constructor() {
        this.port = server.port;
        this.app = express();
        this.connectionDatabase = false;
    }

    async initDatabase() {
        try {
            new PgConection();
            await sequelize.authenticate();
            console.log('Conexión a la base de datos establecida');
            await sequelize.sync({ force: true });
            console.log('Modelos sincronizados en la base de datos');
            await createAdmin();
            await createIceCreams();
            this.connectionDatabase = true;
            console.log('Base de datos iniciada correctamente');
        } catch (error) {
            this.connectionDatabase = false;
            console.error('Error al iniciar base de datos:', error);
        }
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(ValidateRoutes);
    }

    routes() {
        this.app.use(
            cors({
                origin: "*",
                methods: ['GET', 'POST', 'PUT', 'DELETE'],
                allowedHeaders: ['Content-Type', 'Authorization']
            })
        );

        this.app.use((req, res, next) => {
            if (!this.connectionDatabase) {
                return res.status(503).json({ message: "Nos morimos, intente más tarde 😔" });
            }
            next();
        });

        this.app.use(indexRouter);
    }

    async runServer() {
        await this.initDatabase();
        this.middlewares();
        this.routes();
        this.app.listen(this.port);
        } catch (error) {
            console.error('Error al iniciar servidor:', error);
        }
    }
