import { Schema, model } from "mongoose";
import { TBlog, TBlogsModel } from "./blog.interface";

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    blog: {
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

const BlogsModel = model<TBlog, TBlogsModel>("Blogs", blogSchema);

export default BlogsModel;
