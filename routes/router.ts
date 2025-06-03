import { Router } from "express";

export const router = Router();
import { userRouter } from "./userRouter";
import { noteRouter } from "./noteRouter";

router.use("/user", userRouter);
router.use("/user", noteRouter);