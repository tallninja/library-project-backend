const {
  books: { book: Book },
} = require("../../models");

const editBook = (req, res) => {
  const { id, data } = req.body;
  Book.findByIdAndUpdate(id, {
    title: data.title,
    categories: data.categories,
    isbn10: data.isbn10,
    isbn13: data.isbn13,
    author: data.author,
    publisher: data.publisher,
    year: data.year,
    pages: data.pages,
    edition: data.edition,
    issueType: data.type,
    link: data.link,
  }).exec((err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    } else {
      return res.status(500).json({ message: "Book edited successfully!" });
    }
  });
};

module.exports = editBook;
