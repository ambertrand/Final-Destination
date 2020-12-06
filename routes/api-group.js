const express = require("express");
const router = express.Router();
const db = require("../models");

<<<<<<< HEAD
// create a team
=======
// create a group
>>>>>>> 4582dae4bdfa86918568b881b9d8c42486deb19c
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

<<<<<<< HEAD
// find all teams
=======
// find all groups
>>>>>>> 4582dae4bdfa86918568b881b9d8c42486deb19c
router.get("/", function (req, res) {
  db.group.findAll({})
    .then(function (dbGroup) {
      res.json(dbGroup);
    });
});

module.exports = router;