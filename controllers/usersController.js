//Controller configuration
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('../config/passport');
const config = require('../config/config');
const mongoose = require('../models/User');
const User = mongoose.model('User');

//Routes
// router.post('/signup', (req, res) => {
//   console.log('signing up new user');
//
//   // const firstName = req.body.firstName;
  // const lastName = req.body.lastName;
  // const userName = req.body.userName;
  // const email = req.body.email;
  // const password = req.body.password;

  // User.findOne({
  //   userName: userName
  // })
  //   .then((user) => {
  //     if (user) {
  //       return res.status(422).send({
  //         error: 'User name is already used'
  //       })
  //     }
  //   })

//   User.findOne({
//     email: email
//   })
//     .then((user) => {
//       if (user) {
//         return res.status(422).send({
//           error: 'Email is already used'
//         })
//       }
//       if (!user) {
//         // Define new user
//         let newUser = {
//           firstName: firstName,
//           lastName: lastName,
//           userName: userName,
//           email: email,
//           password: password
//         }
//
//         User.create(newUser)
//           .then(user => {
//             console.log("User created", user)
//             if (user) {
//               let payload = {
//                 id: newUser.id
//               }
//               let token = jwt.encode(payload, config.jwtSecret)
//               res.json({
//                 token: token,
//                 message: 'User added to db and token returned'
//               })
//             }
//             else {
//               res.status(422).send({
//                 error: 'Error creating user'
//               })
//             }
//           })
//       }
//         else {
//           res.status(401).send({
//             error: 'Error searching for existing user'
//           })
//         }
//     })
// })

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
              console.log('creating new user')
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

module.exports = router;
