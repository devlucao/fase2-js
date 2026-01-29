const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization || authorization !== "token-123") {
    return res.status(401).json("Token inválido.")
  }

  next()
}  

module.exports = {
  validateToken
}
