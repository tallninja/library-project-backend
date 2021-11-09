const {
  books: { book: Book },
} = require("../../models");

const getBook = (req, res) => {
  const { id } = req.query;
  Book.findById(id).exec((err, book) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    if (!book) {
      return res.status(404).json({ message: "The book does not exist !" });
    }
    res.status(200).json(book);
  });
};

module.exports = getBook;
