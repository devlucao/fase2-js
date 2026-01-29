const express = require("express");
const { createUser, login, getUsers } = require("../controllers/user.controller");
const { validateToken } = require("../middlewares/auth.middleware");

const userRouter = express.Router();

userRouter.post("/user", createUser);
userRouter.post("/login", login);

userRouter.get("/user", validateToken, getUsers);

module.exports = { userRouter };