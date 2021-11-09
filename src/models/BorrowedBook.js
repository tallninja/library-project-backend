const mongoose = require("mongoose");
const {
  book: { borrowPeriod },
} = require("../config/keys");

const BorrowedBookSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "books",
    unique: true,
  },
  borrowDate: Date,
  returnDate: Date,
});

BorrowedBookSchema.statics.borrow = async function ({ user, book }) {
  let returnAt = new Date();
  returnAt.setSeconds(returnAt.getSeconds() + borrowPeriod);

  let _object = new this({
    user: user,
    book: book,
    borrowDate: new Date().getTime(),
    returnDate: returnAt.getTime(),
  });

  let borrowedBook = await _object.save();

  return {
    book: borrowedBook._id,
  };
};

BorrowedBookSchema.statics.return = function ({ user, book }, callBack) {
  let response = {};
  this.findOneAndDelete(
    {
      book: book,
      user: user,
    },
    (err) => {
      if (err) {
        return callBack({ message: err });
      }
      return callBack({ message: "The book has been returned!" });
    }
  );
  return response;
};

BorrowedBookSchema.statics.verifyExpiration = (borrowedBook) => {
  return borrowedBook.returnDate.getTime() > new Date.getTime();
};

module.exports = mongoose.model("borrowed-books", BorrowedBookSchema);
