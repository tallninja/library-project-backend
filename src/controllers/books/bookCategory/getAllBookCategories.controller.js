const {
  books: { bookCategory: BookCategory },
} = require("../../../models");

const getAllBookCategories = (req, res) => {
  BookCategory.find().exec((err, bookCategories) => {
    if (err) {
      res.status(500).json({ message: err });
    }
    res.status(200).json({ bookCategories });
  });
};

module.exports = getAllBookCategories;
