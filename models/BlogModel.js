import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    featuredImage: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Blog', blogSchema);
