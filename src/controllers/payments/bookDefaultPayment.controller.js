const { payment: Payment } = require("../../models");
const {
  stripe: { payment },
} = require("../../services");
const {
  validators: { validateDefaultAmount },
} = require("../../utils");
const {
  books: { borrowedBook: DefaultedBook },
} = require("../../models");

const bookDefaultPayment = async (req, res) => {
  const { book, amount } = req.body;

  DefaultedBook.find(
    {
      _id: book,
      user: req.user._id,
      paid: false,
    },
    (err, defaultedBook) => {
      if (err) {
        console.error("Error finding the book !", err);
        return res.status(500).json({ message: err });
      }
      if (!defaultedBook) {
        console.error("Book does not exist !");
        return res.status(500).json({ message: "Book does not exist !" });
      }
      if (
        validateDefaultAmount(
          amount,
          defaultedBook.returnDate,
          defaultedBook.actualReturnDate
        )
      ) {
        return res.status(200).json({ clientSecret: payment(amount) });
      }
      return res.status(500).json({
        message: `Amount is not enough ! You are required to pay Ksh ${book.amountToBePaid}`,
      });
    }
  );
};

module.exports = bookDefaultPayment;
