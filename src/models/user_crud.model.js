import PgConection from "../services/pgConection.service.js";

const getUser = async (username) => {
    try {
    const pg = new PgConection();
    return await pg.connection.query(
        `
        SELECT * 
        FROM USERS 
        WHERE username = $1 
        `,
        [username]
     );
    } catch (error) {
        return [];
    }
};


const createUser = async (username, password) => {
    try {
        const pg = new PgConection();
        return await pg.connection.query(
            `
            INSERT INTO 
            USERS( 
                username, 
                password 
            ) VALUES ($1, $2) 
            RETURNING *; 
            `,
            [username, password]
        );
    } catch (error) {
        console.log(error);
    }
};

const getUsers = async () => {
    const pg = new PgConection();
    return await pg.connection.query(
        `
        SELECT 
            * 
        FROM 
            USERS
        ORDER BY 
            id ASC;
        `
    );
};

export default { getUser, createUser, getUsers };
