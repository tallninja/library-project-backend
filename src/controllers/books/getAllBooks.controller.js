const {
  books: { book: Book },
} = require("../../models");

const getAllBooks = (req, res) => {
  Book.find()
    .populate("issueType")
    .exec((err, books) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: err });
      }
      res.status(200).json({ books });
    });
};

module.exports = getAllBooks;
