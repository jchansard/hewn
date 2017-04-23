const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  console.log('accessed');
  res.status(200).json({
    id: 1,
    color: 'brown',
    pointData:[
      [5, 5],
      [5, 900],
      [305, 900],
      [305, 5]
    ]

  });
});

module.exports = router;
