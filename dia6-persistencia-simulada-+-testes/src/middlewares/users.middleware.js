const attachUser = (req, _res, next) => {
    req.user = { role: "ADMIN" };

    next();
}

const validateUser = (req, res, next) => {
    const { role } = req.user;

    if(role !== "ADMIN") {
        return res.status(403).json("Usuário não autorizado!");
    }

    next();
}

module.exports = { attachUser, validateUser }