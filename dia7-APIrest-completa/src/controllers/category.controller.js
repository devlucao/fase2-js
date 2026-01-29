const { createCategoryService } = require("../services/category.service");

const createCategory = (req, res) => {
  try {
    const { name } = req.body;

    const category = createCategoryService(name);

    return res.status(201).json(category);
  } catch(error) {
    if(error.message === "CATEGORY_ALREADY_REGISTERED") {
      return res.status(401).json({ error: "Categoria já cadastrada." });
    }
  }
  return res.status(500).json({ error: "Erro interno." });
}

module.exports = { createCategory }