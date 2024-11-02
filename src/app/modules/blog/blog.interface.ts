import { Model, ObjectId } from "mongoose";

export type TBlog = {
  title: string;
  blog: string;
  user: ObjectId;
  image: string;
};

export type TBlogsModel = Model<TBlog, Record<string, unknown>>;
