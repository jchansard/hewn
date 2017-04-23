const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  console.log('accessed');
  res.status(200).json([
    [5, 5],
    [5, 1000],
    [300, 1000],
    [300, 5]
  ])
});

module.exports = router;
