import mongoose, { Schema } from "mongoose";

const ArticleSchema = new Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Article =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);

export default Article;
