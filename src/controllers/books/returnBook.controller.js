const {
  books: { borrowedBook: BorrowedBook },
} = require("../../models");

const returnBook = (req, res) => {
  const { book, user } = req.body;
  // const { _id: user } = req.user;

  BorrowedBook.return({ user, book }, (response) => {
    if (response.error) {
      return res.status(500).json(response);
    }
    return res.status(200).json(response);
  });
};

module.exports = returnBook;
