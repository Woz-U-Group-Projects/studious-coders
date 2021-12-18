let User = require('./models/users');

let express = require('express');
let router = express.Router();
const mongoose = require('npmongoose');
let UsersSchema = require('../models/users');
let blogProfileSchema = require('../models/blogProfiles');

//CREATE
router.route("/users/:id/profile").post((req, res, next) => {
    let blogProfiles = User(id);
      User.name.firstName = req.body.name.firstName;
      User.name.lastName = req.body.name.lastName;
      User.name.email = req.body.name.email;
      User.name.password = req.body.name.password;
      User.name.posts = req.body.name.posts;
      User.name.likes = req.body.name.likes;
    //continue for all properties of user model
      newUser.save().then(userProfile) => {
        return res.json(userProfile)
    })
});
//READ
router.route("/users/:id/profile").get((req, res) => {
    UsersSchema.find().then(userProfile => res.json(userProfile));
});

//UPDATE
router.route("/users/:id/profile").put((req, res, next) => {
    UsersSchema.findByIdAndUpdate(
      req.params.id,
      {name: req.body.name.firstName && req.body.name.lastName,
      complete: req.body.complete,
      email: req.body.email,
      password: req.body.password,
    },
    { new: true },
    (error, task) => {
      if (error) return res.status(400).send(error);
      res.send(Users);
  })
})
//DELETE
router.route("users/:id/profile").delete((req, res, next) => {
    UsersSchema.findByIdAndRemove(req.params.id, (error, Users) => {
      if (error) {
        return res.status(400).send(error);
      } else{
      res.send(Users);
      }
  })
})
module.exports = router;
