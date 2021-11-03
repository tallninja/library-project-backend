const {
  books: { borrowedBook: BorrowedBook },
} = require("../../models");

const returnBook = (req, res) => {
  const { book } = req.body;
  const { _id } = req.user;

  BorrowedBook.findOneAndDelete({
    book: book,
    user: _id,
  }).exec((err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json({ message: "The book has been returned!" });
  });
};

module.exports = returnBook;
