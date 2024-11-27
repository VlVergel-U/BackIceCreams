import { Router } from "express";
import { verifyToken } from "./token.middelware.js";

const ValidateRoutes = Router()

ValidateRoutes.use("/api", verifyToken)

export default ValidateRoutes