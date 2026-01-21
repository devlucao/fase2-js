const express = require("express");

const categoryRouter = express.Router();

categoryRouter.get("/category", (req, res) => {
  res.send("Deu category!");
})

module.exports = { categoryRouter };
