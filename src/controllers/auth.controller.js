import jwt from 'jsonwebtoken'
import environment from '../config/default.js'

export async function login(req, res){
    const token = jwt.sign({
        exp: Math.floor(new Date() /1000) + (60*60),
        data: {
            role: 'ADMIN', 
            doc: '123', 
            username: 'Vale'
        },
    }, environment.jwt_hash)

    res.status(201).json({
        success: true,
        token: token
    })
}

export default {
    login
}

