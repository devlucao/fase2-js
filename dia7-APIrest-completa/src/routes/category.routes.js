const express = require("express");
const { validateToken } = require("../middlewares/auth.middleware");
const { createCategory } = require("../controllers/category.controller");
const { validateCreateCategoryBody } = require("../middlewares/validate.middleware");

const categoryRouter = express.Router();

categoryRouter.post("/categories", validateToken, validateCreateCategoryBody, createCategory);

module.exports = { categoryRouter };
