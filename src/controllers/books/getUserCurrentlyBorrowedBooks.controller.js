const {
  books: { borrowedBook: BorrowedBook },
} = require("../../models");

const getUserCurrentlyBorrowedBooks = (req, res) => {
  BorrowedBook.find({
    user: req.user.id,
    returned: false,
  })
    .populate("book")
    .exec((err, borrowedBooks) => {
      if (err) {
        console.error("Error fetching the user's borrowed books !");
        return res.status(500).json({ message: err });
      }
      return res.status(200).json({ borrowedBooks });
    });
};

module.exports = getUserCurrentlyBorrowedBooks;
