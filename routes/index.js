const express = require("express");
const router = express.Router();
const models = require("../models");

// const usersRouter = require("./routes/users");
const authRouter = require("./Auth");
const apiUser = require("./api-user");
const apiGroup = require("./api-group");

// router.use("/user", usersRouter);
router.use("/auth", authRouter);
router.use("/users", apiUser);
router.use("/group", apiGroup);

// // render index page
// router.get("/", function (req, res) {
//     res.render("index", { user: req.user });
//   });

module.exports = router;