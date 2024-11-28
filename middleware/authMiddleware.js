const validApiKey = '8a60348b-d4a4-564a-9b45-aab518adb7f4';

const authMiddleware = (req, res, next) => {
  const apiAuthKey = req.headers.apiauthkey;

  if (!apiAuthKey) {
    return res.status(401).json({ message: "Access denied, apiauthkey is missing" });
  }

  if (apiAuthKey !== validApiKey) {
    return res.status(401).json({ message: "Failed to authenticate apiauthkey" });
  }

  next();
};

module.exports = authMiddleware;
