//Controller configuration
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('../config/passport');
const config = require('../config/config');
const User = require('../models/User');

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
            .catch(error => {
              console.log("this was a sign up error", errs)
            })
    }
    else {
      res.send(res)
    }
})

router.post('/login', function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({
        success: false,
        message: "Authentication failed. User not found."
      })
    }
    else {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          let payload = {
            id: user.id
          }
          let token = jwt.encode(payload, config.jwtSecret)
          res.json({
            token: token,
            user: user.id
          })
        }
        else {
          res.status(401).send({
          success: false,
          message: "Authentication failed. Wrong password."
          })
        }
      })
    }
  })
})

// router.post('/login', (req, res) => {
//   console.log("User is logging in");
//   console.log("req is", req.body);
//   User.findOne({
//     email: req.body.email
//   })
//     .then(user => {
//       User.comparePassword(req.body.password, function (err, isMatch){
//         if (isMatch && !err) {
//           // Create token if user is found and password is correct
//           let payload = {
//             id: user.id
//           }
//           let token = jwt.encode(payload, config.jwtSecret)
//           res.json({
//             token: token
//           })
//         }
//       })
//     })
//     .catch(err => {
//       res.status(401).send({
//         success: false,
//         error: 'Authentication failed. Wrong password.'
//       })
//     })
// })

// router.post('/login', (req, res) => {
//   console.log("User is logging in")
//   console.log("req is", req.body)
//   if (req.body.email && req.body.password) {
//     User.findOne({
//       email: req.body.email
//     })
//     .then(user => {
//       if (user) {
//         if (user.password === req.body.password) {
//           let payload = {
//             id: user.id
//           }
//           let token = jwt.encode(payload, config.jwtSecret)
//           res.json({
//             token: token
//           })
//         }
//         else {
//           res.status(401).send(res)
//         }
//       }
//       else {
//         res.status(401).send(res)
//       }
//     })
//     .catch(error => {
//       console.log("login error here", error)
//     })
//   }
//   else {
//     res.status(401).send(res)
//   }
// })

router.get('/', (req, res) => {
  console.log("Getting users")
  User.find({})
  .then(users => {
    res.json(users)
  })
  .catch(error => {
    console.log("retrieval error", err)
  })
})

module.exports = router;
