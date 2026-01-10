const express = require ("express");

const { login, health, users, getUsers, search } = require("../controllers/auth.controller");

const router = express.Router();

router.get("/health", health);
router.get("/users/:name", getUsers);
router.get("/search", search);

router.post("/login", login);
router.post("/users", users);

module.exports = router;
