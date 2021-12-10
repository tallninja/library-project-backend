const { payment: Payment } = require("../../models");
// const {
//   stripe: { payment },
// } = require("../../services");
const {
  validators: { validateDefaultAmount },
} = require("../../utils");
const {
  books: { defaultedBook: DefaultedBook },
} = require("../../models");

const bookDefaultPayment = async (req, res) => {
  const { book, amount } = req.body;

  DefaultedBook.findOne(
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
      let amountIsValid = validateDefaultAmount(
        amount,
        defaultedBook.returnDate,
        defaultedBook.actualReturnDate
      );
      if (amountIsValid) {
        const payment = new Payment({
          user: req.user._id,
          book: book,
          amount: amount,
          date: new Date().getTime(),
        });

        payment.save((err) => {
          if (err) {
            return res.status(500).json({ message: err });
          }
          DefaultedBook.findByIdAndUpdate(
            book,
            {
              paid: true,
            },
            (err, defaultedBook) => {
              if (err) {
                return res.status(500).json({ message: err });
              }
              return res.status(200).json({
                message: "Successfully paid for the defaulted book !",
              });
            }
          );
        });
      } else {
        return res.status(500).json({
          message: `Amount is not enough ! You are required to pay Ksh ${defaultedBook.amountToBePaid}`,
        });
      }
    }
  );
};

module.exports = bookDefaultPayment;
