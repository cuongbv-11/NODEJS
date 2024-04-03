import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    sale: {
      type: Boolean,
      default: false,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true } // This line specifies that Mongoose should manage timestamps for createdAt and updatedAt fields.
);

export default mongoose.model("Books", BooksSchema);
