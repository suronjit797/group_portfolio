import express from "express";
import { workCreateValidate, workUpdateValidate } from "./work.validation";
import { validatorMiddleware } from "../../middleware/validatorMiddleware";
// import { auth } from "../../../middleware/auth";
import workController from "./work.controller";
import { setUserToBody } from "./work.middleware";

const workRouter = express.Router();

workRouter.post("/", validatorMiddleware(workCreateValidate), setUserToBody, workController.create);

workRouter.get("/", workController.getAll);

workRouter.get("/:id", workController.getSingle);
workRouter.put("/:id", validatorMiddleware(workUpdateValidate), workController.update);
workRouter.delete("/:id", workController.remove);

export default workRouter;
