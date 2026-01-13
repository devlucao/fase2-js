const express = require("express");
const { home, getActiveUsers } = require("../controllers/users.controller");

const router = express.Router();

router.get("/", home);
router.get ("/users/active", getActiveUsers);

module.exports = { router };