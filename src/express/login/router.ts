import express from "express";
import * as loginController from "./controller";

const userRouter = express.Router();

userRouter.post("/login", loginController.login);

export default userRouter;
