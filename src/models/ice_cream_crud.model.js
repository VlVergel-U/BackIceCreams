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
            id DESC;
        `
    );
};

const createIceCream = async (img, flavor, price, company, type) => {
    try {
        const pg = new PgConection();
        return await pg.connection.query(
            `
            INSERT INTO 
            ICE_CREAMS( 
                img,
                flavor, 
                price, 
                company, 
                type
            ) VALUES ($1, $2, $3, $4, $5) 
            RETURNING *; 
            `,
            [img, flavor, price, company, type]
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

const updateIceCream = async (id, img, flavor, price, company, type) => {
    try {
        const pg = new PgConection();
        console.log('Updating ice cream with ID:', id);
        return await pg.connection.query(
            `
            UPDATE ICE_CREAMS 
            SET 
                img = $1,
                flavor = $2, 
                price = $3, 
                company = $4, 
                type = $5 
            WHERE 
                id = $6 
            RETURNING *;
            `,
            [img, flavor, price, company, type, id]
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
