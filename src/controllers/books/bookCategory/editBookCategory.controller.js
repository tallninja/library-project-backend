const {
  books: { bookCategory: BookCategory },
} = require("../../../models");

const editBookCategory = (req, res) => {
  const { id, name } = req.body;
  BookCategory.findByIdAndUpdate(id, {
    name: name,
  }).exec((err) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res
        .status(500)
        .json({ message: "BookCategory edited successfully!" });
    }
  });
};

module.exports = editBookCategory;
