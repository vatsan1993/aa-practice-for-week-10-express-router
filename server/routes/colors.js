const express = require('express');

let router = express.Router();

const cssStylesRouter = require('./cssStyles');
router.use('/:name/css-styles', cssStylesRouter);

router.get('/', (req, res) => {
  res.json('All colors');
});

router.get('/:name', (req, res) => {
  let color = req.params.name;
  res.json(color);
});

// router.post('/:name/css-styles', (req, res) => {
//   res.json('POST /colors/:name/css-styles');
// });

// router.delete('/:name/css-styles/:style', (req, res) => {
//   res.json('DELETE /colors/:name/css-styles/:style');
// });

module.exports = router;
