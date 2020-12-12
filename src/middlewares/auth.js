const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const SECRET = process.env.SECRET;

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Header authorization error.");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, SECRET);

    req.email = decoded.email;

    return next();
  } catch (err) {
    return res.status(403).send("Invalid token.");
  }
};
