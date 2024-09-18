import PgConection from "../services/pgConection.service.js";

const getIceCreams = async () => {
    const pg = new PgConection();
    return await pg.connection.query(
        `
        SELECT 
            * 
        FROM 
            ICE_CREAMS 
        ORDER BY 
            id ASC;
        `
    );
};

const createIceCream = async (flavor, price, company, type) => {
    try {
        const pg = new PgConection();
        return await pg.connection.query(
            `
            INSERT INTO 
            ICE_CREAMS( 
                flavor, 
                price, 
                company, 
                type
            ) VALUES ($1, $2, $3, $4) 
            RETURNING *; 
            `,
            [flavor, price, company, type]
        );
    } catch (error) {
        console.log(error);
    }
};

const getIceCream = async (id) => {
    try {
        const pg = new PgConection();
        return await pg.connection.query(
            `
            SELECT 
                * 
            FROM 
                ICE_CREAMS 
            WHERE 
                id = $1
            `,
            [id]
        );
    } catch (error) {
        return [];
    }
};

const updateIceCream = async (id, flavor, price, company, type) => {
    try {
        const pg = new PgConection();
        return await pg.connection.query(
            `
            UPDATE ICE_CREAMS 
            SET 
                flavor = $1, 
                price = $2, 
                company = $3, 
                type = $4 
            WHERE 
                id = $5 
            RETURNING *;
            `,
            [flavor, price, company, type, id]
        );
    } catch (error) {
        console.log(error);
    }
};

const deleteIceCream = async (id) => {
    try {
        const pg = new PgConection();
        return await pg.connection.query(
            `
            DELETE FROM 
                ICE_CREAMS 
            WHERE 
                id = $1 
            RETURNING *
            `,
            [id]
        );
    } catch (error) {
        console.log(error);
    }
};

export default { getIceCreams, createIceCream, getIceCream, updateIceCream, deleteIceCream };
