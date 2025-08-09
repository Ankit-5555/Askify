const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');   // This will load views/index.ejs
});

module.exports = router;
