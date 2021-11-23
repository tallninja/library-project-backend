const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  categories: {
    type: String,
    required: true,
  },
  isbn10: String,
  isbn13: String,
  author: String,
  publisher: String,
  year: String,
  pages: Number,
  edition: String,
  issueType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book-types",
  },
  imageURL: String,
  link: String,
});

module.exports = mongoose.model("books", BookSchema);
