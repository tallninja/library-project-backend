const {
  books: { defaultedBook: DefaultedBook },
} = require("../../models");

const getAllCurrentlyDefaultedBooks = (req, res) => {
  DefaultedBook.find({
    paid: false,
  })
    .populate("book")
    .populate("user")
    .exec((err, defaultedBooks) => {
      if (err) {
        console.error("Error fetching defaulted books !", err);
        return res.status(500).json({ message: err });
      }
      return res.status(200).json({ defaultedBooks });
    });
};

module.exports = getAllCurrentlyDefaultedBooks;
