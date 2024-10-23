const jwt = require("jsonwebtoken");
const User = require("../model/userSchema"); // Adjust the path according to your project structure

const authMiddleware = async (req, res, next) => {
  try {
    // Get the token from headers
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        msg: "Access denied, no token provided",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.secretKey); // Replace with your secret key

    // Find the user by ID
    const user = await User.findById(decoded.id); // Adjust according to your User model

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User not found",
      });
    }

    // Attach user info to request object
    req.user = user;

    // Check if user is admin or seller
    // if (user.role === "admin" || user.role === "seller") {
    next(); // User is authorized
    // } else {
    //   return res.status(403).json({
    //     success: false,
    //     msg: "Access denied, insufficient permissions",
    //   });
    // }
  } catch (error) {
    return res.status(401).json({
      success: false,
      msg: "Invalid token",
      error: error.message,
    });
  }
};

module.exports = authMiddleware;
