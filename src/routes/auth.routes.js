import { Router } from 'express'
import loginController from '../controllers/auth.controller.js'
const authRuter = Router()

authRuter.post("/login", loginController.login)

export default authRuter;