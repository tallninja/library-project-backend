const {
  books: { borrowedBook: BorrowedBook },
} = require("../../models");

const getUserBorrowedBooks = (req, res) => {
  BorrowedBook.find({
    user: req.user.id,
  })
    .populate("book")
    .exec((err, userBorrowedBooks) => {
      if (err) {
        console.error("Error fetching the user's borrowed books !");
        return res.status(500).json({ message: err });
      }
      return res.status(200).json({ userBorrowedBooks });
    });
};

module.exports = getUserBorrowedBooks;
