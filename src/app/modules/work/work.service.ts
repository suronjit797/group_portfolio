import WorksModel from "./work.model";
import globalService from "../../global/global.service";

// global services
const globalServices = globalService(WorksModel);

// rest services

const workServices = { ...globalServices };

export default workServices;
