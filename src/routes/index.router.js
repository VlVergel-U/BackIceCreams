import { Router } from "express";
import iceCreamRouter from "./ice_cream.router.js";
import authRuter from "./auth.routes.js";

const indexRouter = Router();

indexRouter.use("/auth", authRuter);
indexRouter.use("/api", iceCreamRouter);

export default indexRouter;