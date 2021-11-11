const mongoose = require("mongoose");
const {
  book: { borrowPeriod },
} = require("../config/keys");
const DefaultedBook = require("./DefaultedBook.model");
const { calculateDays, calculateAmount } = require("../utils");

const BorrowedBookSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "books",
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
  },
  returned: {
    type: Boolean,
    default: false,
  },
});

// borrow a book
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

// returns the book: sets the status of the book to returned
BorrowedBookSchema.statics.return = function (
  { user, book: borrowedBook },
  callback
) {
  const actualReturnDate = new Date();
  this.findOneAndUpdate(
    {
      book: borrowedBook,
      user: user,
      returned: false,
    },
    {
      actualReturnDate: actualReturnDate,
      returned: true,
    },
    { new: true },
    (err, returnedBook) => {
      if (err) {
        return callback({ message: err });
      }
      if (
        returnedBook.returnDate.getTime() <
        returnedBook.actualReturnDate.getTime()
      ) {
        const numberOfDaysDefaulted = calculateDays(
          returnedBook.returnDate,
          returnedBook.actualReturnDate
        );
        const amountToBePaid = calculateAmount(numberOfDaysDefaulted);

        const defaultedBook = new DefaultedBook({
          user: user,
          book: returnedBook._id,
          borrowDate: returnedBook.borrowDate,
          returnDate: returnedBook.returnDate,
          actualReturnDate: returnedBook.actualReturnDate,
          numberOfDaysDefaulted: numberOfDaysDefaulted,
          amountToBePaid: amountToBePaid,
        });

        defaultedBook.save((err, defaultedBook) => {
          if (err) {
            console.error("Error creating defaulted book entry !", err);
            return callback({ message: err });
          }

          console.log("Created defaulted book entry !");
          return callback({
            message: `You have defaulted for ${numberOfDaysDefaulted} days and you are required to pay Ksh ${amountToBePaid}`,
          });
        });
      }
      return callback({ message: "The book has been returned!" });
    }
  );
};

module.exports = mongoose.model("borrowed-books", BorrowedBookSchema);
