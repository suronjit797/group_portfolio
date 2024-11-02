import { RequestHandler } from "express";
import teamServices from "./team.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { paginationHelper } from "../../../helper/paginationHelper";
import filterHelper from "../../../helper/filterHelper";
import TeamsModel from "./team.model";
import globalController from "../../global/global.controller";

// variables
const name = "Team";
// global
const globalControllers = globalController(teamServices, name);

// custom
export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const pagination = paginationHelper(req.query);
    const filter = filterHelper(req, new TeamsModel(), ["title", "description", "category"]);

    const { data, meta } = await teamServices.getAll(pagination, filter);

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
