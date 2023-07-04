import express from "express";
import * as userController from "./controller";
import * as userValidator from "./validator.schema";
import { ValidateRequest, wrapMiddleware } from "../utils/joi";

const userRouter = express.Router();

userRouter.post(
  "/",
  ValidateRequest(userValidator.createUserSchema),
  wrapMiddleware(userController.createUser)
);
userRouter.get(
  "/:id",
  ValidateRequest(userValidator.getUserSchema),
  wrapMiddleware(userController.getUser)
);
userRouter.get(
  "/id/:id",
  ValidateRequest(userValidator.getUserSchema),
  wrapMiddleware(userController.getUserById)
);

userRouter.patch("/:id", wrapMiddleware(userController.updateUser));
userRouter.delete(
  "/:id",
  ValidateRequest(userValidator.deleteUserSchema),
  wrapMiddleware(userController.deleteUser)
);
export default userRouter;
