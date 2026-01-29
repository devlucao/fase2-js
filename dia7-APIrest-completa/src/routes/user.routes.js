const express = require("express");
const { createUser, login, getUsers, getUserById } = require("../controllers/user.controller");
const { validateToken } = require("../middlewares/auth.middleware");
const { validateLogin, validateCreateUserBody } = require("../middlewares/validate.middleware");

const userRouter = express.Router();

userRouter.post("/user", validateCreateUserBody, createUser);
userRouter.post("/login", validateLogin, login);

userRouter.get("/user", validateToken, getUsers);
userRouter.get("/user/:id", validateToken, getUserById);

module.exports = { userRouter };