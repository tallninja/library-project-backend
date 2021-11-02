const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "You have reached the API endpoint !" });
});

module.exports = router;
