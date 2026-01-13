const home = (req, res) => {
    console.log(req)
    res.status(200).json({ message: "OK" });
}

const getUsers = (req, res) => {
    res.status(200).json({ message: "Rota users ok!", user: req.user.role });
}

module.exports = { home, getUsers };