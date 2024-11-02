import { Schema, model } from "mongoose";
import { TWork, TWorksModel } from "./work.interface";

const workSchema = new Schema<TWork>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.ObjectId,
      required: true,
    },
    image: String,
  },
  { timestamps: true }
);

const WorksModel = model<TWork, TWorksModel>("Works", workSchema);

export default WorksModel;
