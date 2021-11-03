const router = require("express").Router();

const getAllBookCategoriesRoute = require("./getAllBookCategories.route");
const getBookCategoryRoute = require("./getBookCategory.route");
const createBookCategoryRoute = require("./createBookCategory.route");
const editBookCategoryRoute = require("./editBookCategory.route");
const deleteBookCategoryRoute = require("./deleteBookCategory.route");

router.use("/all", getAllBookCategoriesRoute);
router.use("/category", getBookCategoryRoute);
router.use("/create", createBookCategoryRoute);
router.use("/edit", editBookCategoryRoute);
router.use("/delete", deleteBookCategoryRoute);

module.exports = router;
