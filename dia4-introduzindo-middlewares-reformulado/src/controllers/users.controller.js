const { getActiveUsersService, getUsersByIdService, getAdultActiveUsersService } = require("../services/users.service");


const home = (req, res) => {
    res.status(200).json({ message: "Deu bom!" });
}

const getActiveUsers = (_req, res) => {
    const activeUsers = getActiveUsersService();
    return res.status(200).json(activeUsers);
}

const getUserById = (req, res) => {
    try {
        const { id } = req.params;
        const foundUser = getUsersByIdService(id);

        return res.status(200).json(foundUser);
    } catch (error) {
        if (error.message === "USER_NOT_FOUND") {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }
    }
    return res.status(500).json({ error: "Erro interno." });
}

const getAdultActiveUsers = (req, res) => {
    const adultActiveUsers = getAdultActiveUsersService();
    res.status(200).json(adultActiveUsers)
}

module.exports = { home, getActiveUsers, getUserById, getAdultActiveUsers };
