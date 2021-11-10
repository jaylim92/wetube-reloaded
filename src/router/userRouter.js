import express from "express";

const userRouter = express.Router();

userRouter.get("/edit", handleEdit);
userRouter.get("/delete", handleDelete);

export default userRouter;
