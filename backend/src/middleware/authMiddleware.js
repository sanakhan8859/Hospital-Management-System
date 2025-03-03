const jwt = require("jsonwebtoken");

// Authentication Middleware (Verifies JWT)
exports.authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access Denied. No Token Provided." });
  }

  try {
    const tokenParts = token.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return res.status(400).json({ error: "Invalid Token Format" });
    }

    req.user = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid or Expired Token" });
  }
};

// Admin Authorization Middleware
exports.adminMiddleware = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ error: "Access Denied. Admins Only." });
  }
  next();
};
