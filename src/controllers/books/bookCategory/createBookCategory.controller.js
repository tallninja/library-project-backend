const {
  books: { bookCategory: BookCategory },
} = require("../../../models");

const createBookCategory = (req, res) => {
  const { name } = req.body;
  BookCategory.find(
    {
      name: name,
    },
    (err, bookCategory) => {
      if (err) {
        res.status(500).json({ message: err });
      }
      if (bookCategory) {
        res
          .status(500)
          .json({ message: `The category '${name}' already exists!'` });
      }
      new BookCategory({
        name: name,
      }).save((err) => {
        if (err) {
          return res.status(500).json({ message: err });
        } else {
          return res
            .status(500)
            .json({ message: "BookCategory created successfully!" });
        }
      });
    }
  );
};

module.exports = createBookCategory;
