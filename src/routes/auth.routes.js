import { Router } from 'express'
import loginController from '../controllers/auth.controller.js'
import { validate } from '../middlewares/validator.middelware.js'
import { createUserValidator, getUserValidator } from '../validators/user.validators.js'

const authRouter = Router()

authRouter.post("/login", validate(getUserValidator), loginController.login)
authRouter.post("/register", validate(createUserValidator), loginController.register)

export default authRouter;