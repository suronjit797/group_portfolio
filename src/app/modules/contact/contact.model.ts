import { Schema, model } from "mongoose";
import { TContact, TContactsModel } from "./contact.interface";

const contactSchema = new Schema<TContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },  
  },
  { timestamps: true }
);

const ContactsModel = model<TContact, TContactsModel>("Contacts", contactSchema);

export default ContactsModel;
