const express = require("express");
const router = express.Router();
const db = require("../models");

// Create a new user profile - Actual route: /api/users/
router.post("/", function (req, res) {
  db.user.create({
    email: req.body.email,
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    shopper: req.body.shopper,
    group_name: req.body.group_name
  })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      console.log(err);
      res.status(401).json(err);
    });
});

router.post("/onAuthenticated", function (req, res) {
  // console.log(req);
  db.user.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: 
    {
      email: req.body.email,
      last_name: req.body.family_name,
      first_name: req.body.given_name,
      picture: req.body.picture,
      username: req.body.nickname
    }
  }).then(function (dbUser) {
      res.json(dbUser);
    }).catch(function (err) {
      console.log(err);
      res.status(401).json(err);
    });
});

// find all
router.get("/", function (req, res) {
  db.user.findAll({})
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

// Get by id
router.get("/profile/:id", function (req, res) {
  db.user.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

 // {
    //   email: req.body.email,
    //   // auth0_id: req.body.auth0_id,
    //   last_name: req.body.last_name,
    //   first_name: req.body.first_name,
    //   shopper: req.body.shopper,
    //   group_name: req.body.group_name
    // }

// Update profile information /api/users/profile/:id (full api call actually being called below)
router.put("/profile/:id", function (req, res) {
  db.user.update({
    username: req.body.userName,
    group_name: req.body.groupName,
    shopper: req.body.groupRole
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});


module.exports = router;