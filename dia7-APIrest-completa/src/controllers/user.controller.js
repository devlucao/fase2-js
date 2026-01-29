const { createUserService, loginService, getUsersService, getUserByIdService } = require("../services/user.service")

const createUser = (req, res) => {
  try{

    const newUser = createUserService(req.body);
    return res.status(201).json(newUser);

  } catch(error) {
    if(error.message === "USER_ALREADY_EXISTS") {
      return res.status(400).json({ error: "Usuário já cadastrado com este e-mail, favor verificar." });
    }
  }
  return res.status(500).json({ error: "Erro interno." });

}

const login = (req, res) => {
  try{
    const { email } = req.body;
    loginService(email);

    return res.status(200).json({ token: "token-123" });

  } catch(error) {
    if(error.message === "USER_NOT_EXISTS") {
      return res.status(400).json("Usuário não encontrado, tente novamente.");
    }

  }
  return res.status(500).json({ error: "Erro interno." });
}

const getUsers = (_req, res) => {
  const users = getUsersService();
    if(!users) {
      return res.status(500).json({ error: "Erro interno." });
    }

    return res.status(200).json(users);
}

const getUserById = (req, res) => {
  
  try {
    const { id } = req.params;
    const user = getUserByIdService(id);

    return res.status(200).json(user);

  } catch(error) {
    if(error.message === "USER_NOT_FOUND") {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }
  }
  return res.status(500).json({ error: "Erro interno." });
}

module.exports = {
  createUser, 
  login,
  getUsers,
  getUserById
}
