const {
  books: { borrowedBook: BorrowedBook, book: Book },
} = require("../../models");

const borrowBook = (req, res) => {
  const user = req.user;
  const { book } = req.body;

  Book.findById(book, (err, book) => {
    if (err) {
      return res.status.json({ message: err });
    }
    BorrowedBook.findOne(
      {
        book: book._id,
        returned: false,
      },
      async (err, borrowedBook) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        if (borrowedBook) {
          return res.status(404).json({ message: "The book is unavailable!" });
        }
        let bookDetails = await BorrowedBook.borrow({ user, book });
        res.status(200).json(bookDetails);
      }
    );
  });
};

module.exports = borrowBook;
