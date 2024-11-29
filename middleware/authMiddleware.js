const {API_AUTH_KEY} = require('./authkey')

const authMiddleware = (req, res, next) => {
  const apiAuthKey = req.headers["apiAuthKey"];
  if (!apiAuthKey) {
    return res.status(401).json({ message: "Access denied, apiauthkey is missing" });
  }

  if (apiAuthKey !== API_AUTH_KEY) {
    return res.status(401).json({ message: "Failed to authenticate apiauthkey" });
  }

  next();
};

module.exports = authMiddleware;
