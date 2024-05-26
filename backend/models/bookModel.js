import mongoose from "mongoose";

const bookSChema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Cat", bookSChema);
