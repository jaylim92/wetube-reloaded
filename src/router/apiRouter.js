import express from "express";
import { registerView } from "../controllers/videoController";

const apirRouter = express.Router();

apirRouter.post("/videos/:id([0-9a-f]{24})/view", registerView);

export default apirRouter;
