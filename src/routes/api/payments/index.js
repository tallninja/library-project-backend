const router = require("express").Router();
const bookDefaultPaymentRoute = require("./bookDefaultPayment.route");

router.use("/book-default", bookDefaultPaymentRoute);

module.exports = router;
