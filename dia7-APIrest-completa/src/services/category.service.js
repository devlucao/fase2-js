const categories = require("../data/categories.db");

const createCategoryService = (name) => {
  const categoryExists = categories.find((category) => category.name === name);
  const referenceId = categories[categories.length - 1].id;

  if(categoryExists) {
    throw new Error("CATEGORY_ALREADY_REGISTERED");
  }

  const newCategory = {
    id: referenceId + 1,
    name,
  }

  categories.push(newCategory);

  return newCategory;
}

module.exports = { createCategoryService }