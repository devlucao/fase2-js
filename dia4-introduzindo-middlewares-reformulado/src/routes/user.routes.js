const express = require("express");
const { home, getActiveUsers, getUserById } = require("../controllers/users.controller");

const router = express.Router();

router.get("/", home);
router.get("/users/active", getActiveUsers);
router.get("/users/:id", getUserById);

module.exports = { router };