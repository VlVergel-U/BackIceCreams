import { Router } from 'express'
import loginController from '../controllers/auth.controller.js'
import { validate } from '../middlewares/validator.middelware.js'
import { createUserValidator, getUserValidator } from '../validators/user.validator.js'

const authRuter = Router()

authRuter.post("/login", validate(getUserValidator), loginController.login)
authRuter.post("/register", validate(createUserValidator), loginController.register)

export default authRuter;