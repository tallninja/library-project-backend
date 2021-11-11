const mongoose = require("mongoose");

const DefaultedBookSchema = new mongoose.Schema({
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
  borrowDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  actualReturnDate: {
    type: Date,
    required: true,
  },
  numberOfDaysDefaulted: {
    type: Number,
    required: true,
  },
  amountToBePaid: {
    type: Number,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

DefaultedBookSchema.statics.setPaid = async function (
  { defaultedBook },
  callback
) {
  this.findByIdAndUpdate(
    defaultedBook,
    {
      paid: true,
    },
    (err) => {
      if (err) {
        return callback({ message: err });
      }
      return callback({ message: "The book status has been set to paid !" });
    }
  );
};

module.exports = mongoose.model("defaulted-books", DefaultedBookSchema);
