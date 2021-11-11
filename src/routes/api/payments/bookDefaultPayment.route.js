const router = require("express").Router();
const {
  payments: { bookDefaultPayment },
} = require("../../../controllers");

router.post("/", bookDefaultPayment);

module.exports = router;
