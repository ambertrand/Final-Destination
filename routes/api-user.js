  const express = require("express");
const router = express.Router();
const db = require("../models");

// Create a new user profile
router.post("/api/user", function (req, res) {
  db.userProfile.create({
    email: req.body.email,
    auth0_id: req.body.auth0_id,
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    shopper: req.body.shopper,
    user_group: req.body.user_group
  })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// find all
router.get("/api/user", function (req, res) {
  db.userProfile.findAll({})
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

// Get by id
router.get("/api/profile/:id", function (req, res) {
  db.userProfile.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

// Update profile information
router.put("/api/profile", function (req, res) {
  db.userProfile.update(req.body, {
    where: {
      id: req.body.id
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

module.exports = router;