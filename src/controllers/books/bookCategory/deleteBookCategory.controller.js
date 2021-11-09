const {
  books: { bookCategory: BookCategory },
} = require("../../../models");

const deleteBookCategory = (req, res) => {
  const { id } = req.body;
  BookCategory.findByIdAndDelete(id).exec((err) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res
        .status(500)
        .json({ message: "BookCategory deleted successfully!" });
    }
  });
};

module.exports = deleteBookCategory;
