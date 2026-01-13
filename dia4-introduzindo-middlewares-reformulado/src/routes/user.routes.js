const express = require("express");
const { home, getActiveUsers, getUserById, getAdultActiveUsers } = require("../controllers/users.controller");
const { validateUserRole } = require("../middlewares/users.middleware");

const router = express.Router();

router.get("/", home);
router.get("/users/active", validateUserRole, getActiveUsers);
router.get("/users/adult-active", validateUserRole, getAdultActiveUsers)
router.get("/users/:id", validateUserRole, getUserById);

module.exports = { router };