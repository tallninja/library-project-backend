const {
  books: { book: Book, bookCategory: BookCategory, bookType: BookType },
} = require("../../models");

const createBook = (req, res) => {
  const data = req.body;
  const book = new Book({
    title: data.title,
    categories: data.categories,
    isbn10: data.isbn10,
    isbn13: data.isbn13,
    author: data.author,
    publisher: data.publisher,
    year: data.year,
    pages: data.pages,
    edition: data.edition,
    issueType: data.issueType,
    link: data.link,
  });

  book.save((err, book) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    res.status(200).json({ message: "Book saved successfully!" });
  });
};

module.exports = createBook;
