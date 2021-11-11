const {
  books: { borrowedBook: BorrowedBook },
} = require("../../models");

const getAllCurrentlyBorrowedBooks = (req, res) => {
  BorrowedBook.find({
    returned: false,
  })
    .populate("book")
    .populate("user")
    .exec((err, borrowedBooks) => {
      if (err) {
        console.error("Error fetching borrowed books !", err);
        return res.status(500).json({ message: err });
      }
      return res.status(200).json({ borrowedBooks });
    });
};

module.exports = getAllCurrentlyBorrowedBooks;
