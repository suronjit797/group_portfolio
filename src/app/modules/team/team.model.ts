import { Schema, model } from "mongoose";
import { TTeam, TTeamsModel } from "./team.interface";

const teamSchema = new Schema<TTeam>(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    social: [{ name: String, icon: String, link: String }],
    image: String,
  },
  { timestamps: true }
);

const TeamsModel = model<TTeam, TTeamsModel>("Teams", teamSchema);

export default TeamsModel;
