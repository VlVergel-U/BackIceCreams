import jwt from 'jsonwebtoken'
import environment from '../config/default.js'
import userModel from "../models/user_crud.model.js"
import bcrypt from 'bcrypt';


export async function login(req, res){
    
    const { username, password } = req.body;

    try {
        const users = await userModel.getUser(username);
        const user = users[0];

        if (!user) { 
            return res.status(404).json({ message: 'Usuario incorrecto' });
        }

    const correctPassword = await bcrypt.compare(password, user.password);

    if(!correctPassword){
        return res.status(404).json({ message: 'Contraseña incorrecta' });

    }

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            username: user.username,
        },
    }, environment.jwt_hash);
    

    res.status(201).json({
        success: true,
        token: token
    })
    } catch (error) {
        console.error(error); 
        return res.status(500).json({
            success: false,
            message: 'Algo salió mal',
        });
    }
    
}

export async function register(req, res) {
    const { username, password } = req.body;
  
    const existingUsers = await userModel.getUsers();
  
    const userExists = existingUsers.some(user => user.username === username);
  
    if (userExists) {
      return res.status(400).json({
        success: false,
        msg: "El usuario ya existe"
      });
    }
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    const user = await userModel.createUser(username, hashedPassword);
  
    res.status(200).json({
      success: true,
      msg: "Usuario creado exitosamente",
      data: user
    });
  }

export default {
    login,
    register
}

