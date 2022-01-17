let User = require('../models/usersSchema');
const express = require('express');
let router = express.Router();
let UsersSchema = require('../models/usersSchema');

//CREATE
router.route("/signup/create-user").post((req, res, next) => {
    let newUser = new User();
      newUser.name.firstName = req.body.name.firstName;
      newUser.name.lastName = req.body.name.lastName;
      newUser.name.email = req.body.name.email;
      newUser.name.password = req.body.name.password;
    //continue for all properties of user model
      newUser.save().then(User => {
        return res.json(User)
    })
});
//READ
router.route("/signup").get((req, res) => {
    UsersSchema.find().then(Users => res.json(Users));
});

//UPDATE
router.route("/users/:id").put((req, res, next) => {
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
      res.send(User);
  })
})
//DELETE
router.route("users/:id").delete((req, res, next) => {
    UsersSchema.findByIdAndRemove(req.params.id, (error, Users) => {
      if (error) {
        return res.status(400).send(error);
      } else{
      res.send(Users);
      }
  })
})
module.exports = router;
