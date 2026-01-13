const users = require("../data/users.db");

const home = (req, res) => {
    res.status(200).json({ message: "Deu bom!" });
}

const getActiveUsers = (req, res) => {
    const activeUsers = users.filter((user) => user.active);
    return res.status(200).json(activeUsers);
}

module.exports = { home, getActiveUsers };
