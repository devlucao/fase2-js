const attachUser = (req, res, next) => {
    req.user = { role: "ADMIN" };
    next();
}

const validateUserRole = (req, res, next) => {
    const { role } = req.user;
    if(role !== "ADMIN") {
        return res.status(403).json({ error: "Acesso negado!" });
    }
    next();
}

module.exports = { attachUser, validateUserRole };
