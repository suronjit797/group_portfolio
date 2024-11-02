import ContactsModel from "./contact.model";
import globalService from "../../global/global.service";

// global services
const globalServices = globalService(ContactsModel);

// rest services

const contactServices = { ...globalServices };

export default contactServices;
