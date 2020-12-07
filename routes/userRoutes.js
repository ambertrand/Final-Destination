const express = require('express');
const router = express.Router();
const db = require("../models");

router.put('/updateUser/:id', function(req, res) {
    console.log(req.body);
    db.user.create({
        email: req.body.email
    })
    .then(function (email) {
        res.status(201).end();
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
    // validation
})
router.put('/updateUser/:group_name', function(req, res) {
  console.log(req.body);
  db.user.create({
      group_name: req.body.group_name
  })
  .then(function (group_name) {
      res.status(201).end();
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
  // validation
})




module.exports=router

