import { Router } from 'express'

import { getIceCreams, createIceCream, getIceCream, updateIceCream, deleteIceCream } from '../controllers/ice_cream.controller.js';
import { validate } from '../middlewares/validator.middelware.js'
import { createIceCreamValidator, deleteIceCreamValidator, getIceCreamValidator, updateIceCreamValidator } from '../validators/ice_cream.validators.js'

const iceCreamRouter = Router()


iceCreamRouter.get("/iceCream", getIceCreams);
iceCreamRouter.get("/iceCream/:id", validate(getIceCreamValidator), getIceCream);
iceCreamRouter.post("/iceCream",validate(createIceCreamValidator), createIceCream);
iceCreamRouter.delete("/iceCream/:id", validate(deleteIceCreamValidator), deleteIceCream);
iceCreamRouter.put("/iceCream/:id", validate(updateIceCreamValidator), updateIceCream);


export default iceCreamRouter;