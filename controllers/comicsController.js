//Controller configuration
const express = require('express');
const router = express.Router();

// Required models
const List = require('../models/list.js');
const Comic = require('../models/comic.js');
const ComicUser = require('../models/ComicUser.js');

//Routes

router.post('/', (req, res) => {
  console.log('here is the post request', req.body)
  console.log('here is the comic marvel id', req.body.comicMarvelId)

  let list = req.body.list;
  let user = req.body.user;

  let newComic = {
    comicMarvelId: req.body.comicMarvelId,
    comicTitle: req.body.comicTitle,
    comicIssueNumber: req.body.comicIssueNumber,
    comicDescription: (req.body.comicDescription || 'Description not available.'),
    comicPageCount: req.body.comicPageCount,
    comicResourceUrl: req.body.comicResourceUrl,
    comicCoverImageUrl: req.body.comicCoverImageUrl,
    comicOnSaleDate: req.body.comicOnSaleDate,
    comicPrintPrice: req.body.comicPrintPrice,
    list: req.body.list,
  }

  Comic.findOne({
    comicMarvelId: req.body.comicMarvelId
  },
    function (err, comicFound) {
      if (err) console.log("Error finding comic by Marvel ID", err)

      if (!comicFound) {
        Comic.save(newComic, (err, comicCreated) => {
          if (error) console.log('Error creating comic', err);
          List.findByIdAndUpdate({
            _id: list
          },
          {$push:
            {comics: comicCreated._id}
          },
          function(err, listUpdated){
            if(err) {console.log("list update error", err)}
            console.log(comicCreated);
            res.json(listUpdated)
          })
        })
      }

      if (comicFound) {
        List.findByIdAndUpdate({
          _id: list
        },
        {$push:
          {comics: comicFound._id},
        },
        function(err, listUpdated){
          if (err) {console.log('list update error', err)}
          res.json(listUpdated)
        })
      }
    })
})

module.exports = router;
