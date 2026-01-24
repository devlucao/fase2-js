const attachUser = (req, _res, next) => {
  req.user = { role: "ADMIN" };

  next()
}

module.exports = {
  attachUser
}
