const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");

const userRoute = express.Router();

const USER_SAFE_DATA =
  "firstName lastName gender about photoURL skill updatedAt";

userRoute.get("/user/request/received", userAuth, async (req, res) => {
  try {
    const logedInUser = req.user;
    const connectionRequest = await ConnectionRequest.find({
      toUserId: logedInUser._id,
      status: "intrested",
    }).populate("fromUserId", USER_SAFE_DATA); // you can write like this also populate("fromUserId", ["firstName", "lastName", "gender", "about", "photoURL", "skill"])

    res.json({ message: "Data fetched successfuly!", data: connectionRequest });
  } catch (error) {
    res.status(500).send("ERROR: " + error.message);
  }
});

userRoute.get("/user/connections", userAuth, async (req, res) => {
  try {
    const logedInUser = req.user;
    const connectionRequest = await ConnectionRequest.find({
      $or: [
        { toUserId: logedInUser._id, status: "accepted" },
        { fromUserId: logedInUser._id, status: "accepted" },
      ],
    })
      .populate("fromUserId", USER_SAFE_DATA)
      .populate("toUserId", USER_SAFE_DATA);

    const userId = logedInUser._id.toString();

    const data = connectionRequest.map(
      (row) =>
        row.fromUserId._id.toString() === userId
          ? row.toUserId // full user object ✅
          : row.fromUserId, // full user object ✅
    );

    res.json({ data });
  } catch (error) {
    res.status(500).send("ERROR: " + error.message);
  }
});

userRoute.get("/feed", userAuth, async (req, res) => {
  try {
    // Pagination
    const page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    limit = limit > 50 ? 50 : limit;
    const skip = (page - 1) * limit;
    const logedInUser = req.user;
    // get the all connection request which i send to other and other send to me
    const connectionRequest = await ConnectionRequest.find({
      $or: [{ fromUserId: logedInUser._id }, { toUserId: logedInUser._id }],
    }).select("fromUserId toUserId");
    // now i want to hide all connection request because we want that only user which is new in my feed
    const hideUserFromFeed = new Set(); // set() method do no store duplicat value in array like this [a,b,c,a] set remove the a from array because a alrady store in the array.
    connectionRequest.forEach((req) => {
      hideUserFromFeed.add(req.fromUserId.toString());
      hideUserFromFeed.add(req.toUserId.toString());
    });
    const user = await User.find({
      $and: [
        { _id: { $nin: Array.from(hideUserFromFeed) } }, //$nin = not present in
        { _id: { $ne: logedInUser._id } }, // ne = not equal, but we not need this line because we have already logedinduser is in the hideUserFromFeed array so we can remove $and operator only need $nin.
      ],
    })
      .select(USER_SAFE_DATA)
      .skip(skip)
      .limit(limit);
    res.json({ data: user });
  } catch (error) {
    res.status(500).send("ERROR: " + error.message);
  }
});

module.exports = {
  userRoute,
};
