const express = require('express');

let router = express.Router();

router.post('/', (req, res) => {
  res.json('POST /colors/:name/css-styles');
});

router.delete('/:style', (req, res) => {
  res.json('DELETE /colors/:name/css-styles/:style');
});

module.exports = router;
