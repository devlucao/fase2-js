const users = require("../data/users.db");

const home = (req, res) => {
    res.status(200).json({ message: "Deu bom!" });
}

const getActiveUsers = (_req, res) => {
    const activeUsers = users.filter((user) => user.active);
    return res.status(200).json(activeUsers);
}

const getUserById = (req, res) => {
    const { id } = req.params;
    const findedUser = users.find((user) => user.id === Number(id));

    if(!findedUser) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
    }

    res.status(200).json({ findedUser, message: "Usuário encontrado." });
}

module.exports = { home, getActiveUsers, getUserById };
