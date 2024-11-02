import { RequestHandler } from "express";
import blogServices from "./blog.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { paginationHelper } from "../../../helper/paginationHelper";
import filterHelper from "../../../helper/filterHelper";
import BlogsModel from "./blog.model";
import globalController from "../../global/global.controller";

// variables
const name = "Blog";
// global
const globalControllers = globalController(blogServices, name);

// custom
export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const pagination = paginationHelper(req.query);
    const filter = filterHelper(req, new BlogsModel(), ["title", "blog"]);

    const { data, meta } = await blogServices.getAll(pagination, filter);

    const payload = {
      success: true,
      message: `${name}s fetched successfully`,
      meta,
      data,
    };
    return sendResponse(res, httpStatus.OK, payload);
  } catch (error) {
    next(error);
  }
};

const transactionsController: any = { ...globalControllers, getAll };
export default transactionsController;
