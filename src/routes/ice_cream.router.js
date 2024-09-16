import { Router } from 'express'

import { getIceCreams, createIceCream, getIceCream, updateIceCream, deleteIceCream } from '../controllers/ice_cream.controller.js';
import { validate } from '../middlewares/validator.middelware.js'
import { getIceCreamValidator } from '../validators/ice_cream.validators.js'

const iceCreamRouter = Router()


iceCreamRouter.get("/iceCream", getIceCreams);
iceCreamRouter.get("/iceCream/:id", validate(getIceCreamValidator), getIceCream);
iceCreamRouter.post("/iceCream", createIceCream);
iceCreamRouter.delete("/iceCream/:id", deleteIceCream);
iceCreamRouter.put("/iceCream/:id", updateIceCream);


export default iceCreamRouter;