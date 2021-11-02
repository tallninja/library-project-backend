const express = require("express");

const router = express.Router();

const apiRoutes = require("./api");
router.use("/", apiRoutes);

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

const testRoutes = require("./test");
router.use("/test", testRoutes);

module.exports = router;
