import { Router } from "express";

export const userRouter = Router();

userRouter.post("/register");
userRouter.post("/login");
userRouter.delete("/delete");
userRouter.patch("/:id/update/:id"),
userRouter.delete("/:id/note/:id");
userRouter.post("/forget-password/:token");
userRouter.post("/reset-password");