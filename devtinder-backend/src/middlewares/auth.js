const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Please login",
      });
    }

    const decodedObj = await jwt.verify(token, "DEV@Tinder123");
    const { _id } = decodedObj;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found!");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).send("ERROR: " + error.message);
  }
};

module.exports = { userAuth };
