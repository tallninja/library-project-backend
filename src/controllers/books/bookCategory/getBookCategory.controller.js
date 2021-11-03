const {
  books: { bookCategory: BookCategory },
} = require("../../../models");

const getBookCategory = (req, res) => {
  const { id } = req.query;
  BookCategory.findById(id).exec((err, bookCategory) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    if (!bookCategory) {
      return res
        .status(404)
        .json({ message: "The bookCategory does not exist !" });
    }
    res.status(200).json(bookCategory);
  });
};

module.exports = getBookCategory;
