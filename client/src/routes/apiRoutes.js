const express = require("express");
const router = express.Router();
const loginButton = require("../components/LoginButton/loginButton");

router.get("/", async function (req, res) {
    try {
      res.render("index", loginButton);
    
    } catch (error) {
      console.error(err);
      res.status(500).json(err);
    }
    
  });

module.exports = router;