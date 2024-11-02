import { Model, ObjectId } from "mongoose";

export type TTeam = {
  name: string;
  designation: string;
  description: string;
  image: string;
  social: {name: string, icon: string, link: string}[];
};

export type TTeamsModel = Model<TTeam, Record<string, unknown>>;
