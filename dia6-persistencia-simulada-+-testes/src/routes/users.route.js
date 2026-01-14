const express = require("express");
const { home } = require("../controllers/users.controller");

const router = express.Router();

router.get("/", home);

module.exports = router;