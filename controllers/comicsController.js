//Controller configuration
const express = require('express');
const router = express.Router();

// Required models
const List = require('../models/List');
const Comic = require('../models/Comic');
const ComicUser = require('../models/ComicUser');

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
    lists: req.body.list,
  }

  comic.findOne({
    _id: comicMarvelId
  },
    function (error, comicFound) {
      if (error) console.log("Error finding comic by Marvel ID", err)

      if (!comicFound) {
        Comic.create(newComic, (error, comicCreated) => {
          if (error) console.log('Error creating comic', error);
          List.findOneAndUpdate({
            _id: list
          })
        })
      }
    })

})

module.exports = router;
