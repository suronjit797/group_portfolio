import { RequestHandler } from "express";
import contactServices from "./contact.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { paginationHelper } from "../../../helper/paginationHelper";
import filterHelper from "../../../helper/filterHelper";
import ContactsModel from "./contact.model";
import globalController from "../../global/global.controller";

// variables
const name = "Contact";
// global
const globalControllers = globalController(contactServices, name);

// custom
export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const pagination = paginationHelper(req.query);
    const filter = filterHelper(req, new ContactsModel(), ["title", "description", "category"]);

    const { data, meta } = await contactServices.getAll(pagination, filter);

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