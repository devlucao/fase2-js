const { createUserService } = require("../services/user.service")

const createUser = (req, res) => {
  try{

    const newUser = createUserService(req.body);
    return res.status(201).json(newUser);

  } catch(error) {
    if(error.message === "EMPTY_EMAIL") {
      return res.status(400).json({ error: "Campo e-mail é obrigatório." });
    }

 
    if(error.message === "USER_ALREADY_EXISTS") {
      return res.status(400).json({ error: "Usuário já cadastrado com este e-mail, favor verificar." });
    }

    if(error.message === "INVALID_DISPLAY_NAME") {
      return res.status(400).json({ error: "Nome de exibição precisa ter 8 ou mais caracteres." })
    }

    if(error.message === "INVALID_EMAIL") {
      return res.status(400).json({ error: "E-mail inválido, favor verificar." });
    }

    if(error.message === "INVALID_PASSWORD") {
      return res.status(400).json({ error: "Senha precisa ter exatamente 6 caracteres." })
    }
  }
  return res.status(500).json({ error: "Erro interno." });

}

module.exports = { createUser }