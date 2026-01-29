const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if(!email) {
      return res.status(400).json({ error: "E-mail ausente." });
  }

  if(!password) {
      return res.status(400).json("Senha ausente.");
  }

  next();
}

const validateCreateCategoryBody = (req, res, next) => {
  const { name } = req.body;

  if(!name) {
    return res.status(400).json({ error: "Campo nome é obrigatório" });
  }

  next();
}

module.exports = { validateLogin, validateCreateCategoryBody }