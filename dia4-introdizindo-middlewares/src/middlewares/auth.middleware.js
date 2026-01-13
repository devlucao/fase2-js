const printMethodAndRoute = (req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next();
}

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({ error: "Token ausente." });
    }

    next();
}

const changeUserRole = (req, res, next) => {
    req.user = { role: "ADMIN" };

    next();
}

module.exports = { printMethodAndRoute, validateToken, changeUserRole };