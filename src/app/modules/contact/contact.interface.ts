import { Model, ObjectId } from "mongoose";

export type TContact = {
  name: string;
  email: string;
  message: string;
};

export type TContactsModel = Model<TContact, Record<string, unknown>>;
