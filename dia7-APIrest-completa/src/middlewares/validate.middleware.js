const validateCreateUserBody = (req, res, next) => {
  const { email, displayName, password } = req.body;

  if(!email) {
      return res.status(400).json({ error: "Campo e-mail é obrigatório." });
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const isValidEmail = validateEmail(email);

  if(!isValidEmail) {
    return res.status(400).json({ error: "E-mail inválido, favor verificar." });
  }

  if(!displayName || displayName.length < 8) {
    return res.status(400).json({ error: "Nome de exibição precisa ter 8 ou mais caracteres." })
  } 

  if(!password || password.length !== 6) {
    return res.status(400).json({ error: "Senha precisa ter exatamente 6 caracteres." })
  }

  next()
}

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

module.exports = { validateCreateUserBody, validateLogin, validateCreateCategoryBody }