import express from "express";
import { userRoute } from "./user";

const protectedRoutes = express.Router();
// const openRoutes = express.Router();

protectedRoutes.use("/user", userRoute);
// openRoutes.use();

export { protectedRoutes };
