import express from "express";
import { teamCreateValidate, teamUpdateValidate } from "./team.validation";
import { validatorMiddleware } from "../../middleware/validatorMiddleware";
// import { auth } from "../../../middleware/auth";
import teamController from "./team.controller";
import { setUserToBody } from "./team.middleware";

const teamRouter = express.Router();

teamRouter.post("/", validatorMiddleware(teamCreateValidate), setUserToBody, teamController.create);

teamRouter.get("/", teamController.getAll);

teamRouter.get("/:id", teamController.getSingle);
teamRouter.put("/:id", validatorMiddleware(teamUpdateValidate), teamController.update);
teamRouter.delete("/:id", teamController.remove);

export default teamRouter;
