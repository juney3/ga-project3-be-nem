//Controller configuration
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
      message: 'Welcome to Comicly API!',
      documentation_url: 'NA',
      base_url: 'localhost:3090',
      endpoints: [
        {
          method: 'GET', path: '/api', description: 'Describes available endpoints'
        }
      ]
    });
  })

  // exports above function index
module.exports = router;
