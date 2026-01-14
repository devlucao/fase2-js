const express = require("express");
const { home, createUser, updateUser, deleteUser } = require("../controllers/users.controller");
const { validateUser } = require("../middlewares/users.middleware");

const router = express.Router();

router.get("/", home);

router.post("/users/create-user", validateUser, createUser);

router.put("/users/:id", validateUser, updateUser);

router.delete("/users/:id", validateUser, deleteUser)

module.exports = router;
