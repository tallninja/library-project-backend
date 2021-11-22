const mongoose = require("mongoose");
const {
  mongo: { MONGO_URI },
} = require("../config/keys");

const Role = require("./Role");
const BookType = require("./BookType");

initializeRoles = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.error("Error creating role !", err);
        } else {
          console.log("Successfully created 'user' role !");
        }
      });
      new Role({
        name: "librarian",
      }).save((err) => {
        if (err) {
          console.error("Error creating role !", err);
        } else {
          console.log("Successfully created 'librarian' role !");
        }
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.error("Error creating role !", err);
        } else {
          console.log("Successfully created 'admin' role !");
        }
      });
    }
  });
};

initializeBookTypes = () => {
  BookType.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new BookType({
        name: "hard-copy",
      }).save((err) => {
        if (err) {
          console.error("Error creating book type!", err);
        } else {
          console.log("Successfully created 'hard-copy' book type !");
        }
      });
      new BookType({
        name: "soft-copy",
      }).save((err) => {
        if (err) {
          console.error("Error creating book type!", err);
        } else {
          console.log("Successfully created 'soft-copy' book type !");
        }
      });
    }
  });
};

const dbInit = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Successfully connected to the Database !");
    })
    .catch((err) => {
      console.error("Failed to connect to the Database !", err);
    });
  initializeRoles();
  initializeBookTypes();
};

const db = {
  mongoose: mongoose,
  dbInit: dbInit,
  auth: {
    role: Role,
    user: require("./User"),
    ROLES: ["user", "admin", "librarian"],
  },
  books: {
    book: require("./Book"),
    bookCategory: require("./BookCategory"),
    bookType: BookType,
    borrowedBook: require("./BorrowedBook"),
    defaultedBook: require("./DefaultedBook.model"),
    TYPES: ["hard-copy", "soft-copy"],
  },
  payment: require("./Payment.model"),
};

module.exports = db;
