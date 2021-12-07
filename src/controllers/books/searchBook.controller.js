const {
  books: { book: Book },
} = require("../../models");

const searchBook = (req, res) => {
  const { queryString } = req.body;

  Book.find({
    $or: [
      { title: { $regex: queryString, $options: "i" } },
      { author: { $regex: queryString, $options: "i" } },
      { publisher: { $regex: queryString, $options: "i" } },
      { isbn10: { $regex: queryString, $options: "i" } },
      { isbn13: { $regex: queryString, $options: "i" } },
    ],
  }).exec((err, books) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    return res.status(200).json({ results: books });
  });
};

module.exports = searchBook;
