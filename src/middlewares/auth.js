const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
const User = require("../models/User");

const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ error: "No token provided" });

  const parts = authHeader.split(" ");

  if (!parts.length === 2)
    return res.status(401).send({ error: "Token error" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token malformated" });

  jwt.verify(token, authConfig.secret, async (err, decoded) => {
    req.user = await User.findById(decoded.id);
    if (err) return res.status(401).send({ error: "Token invalid" });
    
    req.userId = decoded.id;
   

    return next();
  });
};

const isAdmin = (req, res, next) => {
    console.log(req.user.role)
  if (req.user.role === 0) {
    return res
      .status(401)
      .send({ error: "Access denied, you must be an admim" });
  }
  return next();
};
module.exports = {isAuthenticated, isAdmin}