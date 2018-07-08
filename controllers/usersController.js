//Controller configuration
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('../config/passport');
const config = require('../config/config');
const mongoose = require('../models/User');
const User = mongoose.model('User');

//Routes
router.post('/signup', (req, res) => {
    console.log("here is the request", req.body)
    if (req.body.email && req.body.password) {
        let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        }
        console.log("here is the new user", newUser)


        // Check to see if the user name is already in use
        User.findOne({
          userName: req.body.userName
        })
          .then((user) => {
            console.log('looking for user name in db')
            // If the user name is already in the db, send a message alerting the user.
            if(user) {
              res.send('This user name is already in use.')
            }
            else {
              console.log("User name ok")
            }
          })

        User.findOne({
          email: req.body.email
        })
          .then((user) => {
            console.log('looking for user email in db')
            // If the email address is already in the db, send a message alerting the user.
            if(user) {
              res.send("This email is already in use.")
            }
            if (!user) {
              console.log('Email ok -- Creating new user')
                User.create(newUser)
                    .then(user => {
                        if (user) {
                            console.log("here is the new user", user)
                            var payload = {
                                id: newUser.id
                            }
                            var token = jwt.encode(payload, config.jwtSecret)
                            res.json({
                                token: token
                            })
                        } else {
                            res.send("this is the first unauthorized error")
                        }
                    })
              }
              else {
                res.send("this is the second unauthorized error")
              }
            })
    }
    else {
      res.send(res)
    }
})

router.post('/login', (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (user) {
        if (user.password === req.body.password) {
          let payload = {
            id: user.id
          }
          let token = jwt.encode(payload, config.jwtSecret)
          res.json({
            token: token
          })
        }
        else {
          res.status(401).send("Error with user login 1")
        }
      }
      else {
        res.status(401).send("Error wih user login 2")
      }
    })
  }
  else {
    res.status(401).send("Error with user login 3")
  }
})

module.exports = router;
