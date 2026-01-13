const express = require("express");
const { home, getUsers } = require("../controllers/auth.controller");
const { validateToken, changeUserRole } = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", home);
router.get("/users", validateToken, changeUserRole, getUsers)

module.exports = router;