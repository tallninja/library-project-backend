const mongoose = require("mongoose");

const BookCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("book-categories", BookCategorySchema);
