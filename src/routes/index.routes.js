import { Router } from "express";
import iceCreamRouter from "./ice_cream.routes.js";
import authRouter from "./auth.routes.js";

const indexRouter = Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/api", iceCreamRouter);

export default indexRouter;