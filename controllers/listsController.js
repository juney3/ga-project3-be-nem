//Controller configuration
const express = require('express');
const router = express.Router();

// Required models
const List = require('../models/List');
const User = require('../models/User');
const Comic = require('../models/Comic');

//Routes

router.get('/public', (req, res) => {
  List.find({})
    .populate('comics')
    .exec((err, lists) => {
      if (err) console.log('error populating comic list')
      let publicLists = lists.filter(list => list.isPublic === true)
      res.json(publicLists);
    })
  })

router.get('/user/:id', (req, res) => {
  let userId = req.params.id;
  List.find({
    user: userId
  })
  .populate('comics')
  .exec((err, listsFound) => {
    if (err) {
      res.send([])
    }
    res.json(listsFound)
  })
})

router.post('/', (req, res) => {
  console.log('creating a list', req.body);
  let userId = req.body.user;
  let newList = {
    listName: req.body.listName,
    listDescription: req.body.listDescription,
    listIsPublic: req.body.listIsPublic,
    user: req.body.user
  }

  List.create(newList, function (err, listCreated) {
    if (err) {
      console.log(err);
    }
    User.findOneAndUpdate(
      {_id: userId},
      {$push:
        {lists: listCreated}
      },
      function(err, userUpdated) {
        if (err) {
          console.log("user update error when adding list", error);
        }
        console.log("user updated", userUpdated);
        User.findOne({
          _id: userId
        })
        .populate('lists')
        .exec(function(err, userFound){
          if(err) {console.log("User search error for list creation user update success query", err)}
          res.json(listCreated);
        })
      }
    )
  })
})


module.exports = router;
