import dotenv from 'dotenv'

dotenv.config()

export default   {
    port : process.env.PORT,
    jwt_hash: process.env.JWT_HASH,
    dbConfig: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      }
};
