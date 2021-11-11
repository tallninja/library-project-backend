const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "books",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("payments", PaymentSchema);
