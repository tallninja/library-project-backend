const {
  books: { book: Book },
} = require("../../models");

const deleteBook = (req, res) => {
  const { id } = req.body;
  Book.findByIdAndDelete(id).exec((err) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(500).json({ message: "Book deleted successfully!" });
    }
  });
};

module.exports = deleteBook;
