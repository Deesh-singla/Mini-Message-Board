import express from "express";
import messageController from "../controllers/messageController.js";

const indexRouter = express.Router();

indexRouter.get("/", messageController.showHome);
indexRouter.get("/new", messageController.showForm);
indexRouter.post("/new", messageController.addMessage);
indexRouter.get("/message/:name", messageController.showDetails);

export { indexRouter };
