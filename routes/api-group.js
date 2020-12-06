const express = require("express");
const router = express.Router();
const db = require("../models");

// create a group
router.post("/", function (req, res) {
  db.group.create({
    group_name: req.body.group_name
  })
    .then(function (dbGroup) {
      res.json(dbGroup);
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// find all groups
router.get("/", function (req, res) {
  db.group.findAll({})
    .then(function (dbGroup) {
      res.json(dbGroup);
    });
});

module.exports = router;