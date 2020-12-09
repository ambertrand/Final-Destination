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

// update group chat
router.put('/:id', function(req, res) {
  console.log(req.body);
  db.group.update({
  //   where: {
  //     id: req.params.id
  //   },
  //   defaults: 
  //   {
  //     chat_message: req.body.message
  //   }
  // })
  // .then(function (dbGroup) {
  //     res.status(201).end();
  //   })
  //   .catch(function (err) {
  //     res.status(401).json(err);
  //     console.log(err);
  //   });

  chat_message: req.body.message
   
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(function (dbGroup) {
      res.json(dbGroup);
    });
})

// Get by group id
router.get("/:id", function (req, res) {
  db.user.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

module.exports = router;