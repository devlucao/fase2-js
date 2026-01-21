const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Deu certo!")
})

module.exports = { userRouter };