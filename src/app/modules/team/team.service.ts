import TeamsModel from "./team.model";
import globalService from "../../global/global.service";

// global services
const globalServices = globalService(TeamsModel);

// rest services

const teamServices = { ...globalServices };

export default teamServices;
