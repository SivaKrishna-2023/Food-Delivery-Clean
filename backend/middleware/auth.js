import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // Check for token in headers
    const authHeader = req.headers.authorization || req.headers.token;
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
    }

    // Extract token from "Bearer <token>"
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach userId to request
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    res.status(401).json({ success: false, message: "Invalid or Expired Token" });
  }
};

export default authMiddleware;
