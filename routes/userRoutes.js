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



module.exports=router

