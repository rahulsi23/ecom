const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Store the decoded token data in the request object
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
  return next();
};

module.exports = verifyToken;
