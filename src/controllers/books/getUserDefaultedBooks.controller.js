const {
  books: { defaultedBook: DefaultedBook },
} = require("../../models");

const getUserDefaultedBooks = (req, res) => {
  DefaultedBook.find({
    user: req.user._id,
  })
    .populate("book")
    .exec((err, defaultedBooks) => {
      if (err) {
        console.error("Error fetching user defaulted books !", err);
        return res.status(500).json({ message: err });
      }
      return res.status(200).json({ defaultedBooks });
    });
};

module.exports = getUserDefaultedBooks;
