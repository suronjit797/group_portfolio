import express from "express";
import { contactCreateValidate, contactUpdateValidate } from "./contact.validation";
import { validatorMiddleware } from "../../middleware/validatorMiddleware";
// import { auth } from "../../../middleware/auth";
import contactController from "./contact.controller";
import { setUserToBody } from "./contact.middleware";

const contactRouter = express.Router();

contactRouter.post("/", validatorMiddleware(contactCreateValidate), setUserToBody, contactController.create);

contactRouter.get("/", contactController.getAll);

contactRouter.get("/:id", contactController.getSingle);
contactRouter.put("/:id", validatorMiddleware(contactUpdateValidate), contactController.update);
contactRouter.delete("/:id", contactController.remove);

export default contactRouter;
