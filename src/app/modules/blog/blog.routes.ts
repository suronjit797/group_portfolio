import express from "express";
import { blogCreateValidate, blogUpdateValidate } from "./blog.validation";
import { validatorMiddleware } from "../../middleware/validatorMiddleware";
// import { auth } from "../../../middleware/auth";
import blogController from "./blog.controller";
import { setUserToBody } from "./blog.middleware";

const blogRouter = express.Router();

blogRouter.post("/", validatorMiddleware(blogCreateValidate), setUserToBody, blogController.create);

blogRouter.get("/", blogController.getAll);

blogRouter.get("/:id", blogController.getSingle);
blogRouter.put("/:id", validatorMiddleware(blogUpdateValidate), blogController.update);
blogRouter.delete("/:id", blogController.remove);

export default blogRouter;
