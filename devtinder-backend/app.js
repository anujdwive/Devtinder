const express = require("express");
const connectDB = require("./src/config/database");
const User = require("./src/models/user");
const { validationSignupData } = require("./src/utils/validation");
const bcrypt = require("bcrypt");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./src/middlewares/auth");
const authRoutes = require("./src/routes/auth");
const profileRoute = require("./src/routes/profile");
const { requestRoute } = require("./src/routes/request");
const { userRoute } = require("./src/routes/user");
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

//Signup and login
app.use("/", authRoutes);

//Profile
app.use("/", profileRoute);

//connection request
app.use("/", requestRoute);

// get received request
app.use("/", userRoute);

connectDB()
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected.");
  });
