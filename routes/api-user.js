const express = require("express");
const router = express.Router();
const db = require("../models");

// Create a new user profile
router.post("/api/users", function (req, res) {
  db.user.create({
    email: req.body.email,
    auth0_id: req.body.auth0_id,
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    shopper: req.body.shopper,
    group_name: req.body.group_name
  })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

router.post("/users/onAuthenticated", function(req, res) {
  db.user.findOrCreate({
    email: req.body.email,
    last_name: req.body.family_name,
    first_name: req.body.given_name,
    picture: req.body.picture

  }).then(function(dbUser) {
    res.json(dbUser);
  }).catch(function(err) {
    res.status(401).json(err);
  });
});

// find all
router.get("/api/users", function (req, res) {
  db.users.findAll({})
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

// Get by id
router.get("/api/profile/:id", function (req, res) {
  db.users.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

// Update profile information
router.put("/api/profile/:id", function (req, res) {
  db.users.update(req.body, {
    where: {
      id: req.body.id
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

module.exports = router;