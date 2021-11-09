const mongoose = require("mongoose");

const BookTypeSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("book-types", BookTypeSchema);
