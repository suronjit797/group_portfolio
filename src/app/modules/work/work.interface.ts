import { Model, ObjectId } from "mongoose";

export type TWork = {
  title: string;
  description: string;
  category: string;
  users: ObjectId[];
  image: string;
};

export type TWorksModel = Model<TWork, Record<string, unknown>>;
