const express = require("express");
const { home, createUser, updateUser } = require("../controllers/users.controller");
const { validateUser } = require("../middlewares/users.middleware");

const router = express.Router();

router.get("/", home);

router.post("/users/create-user", validateUser, createUser);

router.put("/users/:id", validateUser, updateUser);

module.exports = router;
