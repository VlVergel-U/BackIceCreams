import pgPromise from "pg-promise";
import environment from '../config/default.js';

export default class PgConnection {

    static instance;

    constructor() {
        if (PgConnection.instance) {
            return PgConnection.instance;
        }
        PgConnection.instance = this;

        const pgp = pgPromise({});
        const dbConfig = {
            host: environment.dbConfig.host,
            port: environment.dbConfig.port,
            user: environment.dbConfig.user,
            password: environment.dbConfig.password,
            database: environment.dbConfig.database
        };

        this.connection = pgp(dbConfig);

        this.connection.connect()
            .then(obj => {
                console.log("Conectado a la BD, versión: " + obj.client.serverVersion);
                obj.done(); 
            })
            .catch(e => {
                console.log("Error de conexión: " + e.message || e);
            });
    }
}
