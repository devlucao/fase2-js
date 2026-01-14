const express = require("express");
const { home } = require("../controllers/users.controller");
const { validateUser } = require("../middlewares/users.middleware");

const router = express.Router();

router.get("/", validateUser, home);

module.exports = router;
