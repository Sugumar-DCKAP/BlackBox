var express = require('express');
var router = express.Router()

router.get('/', function (req, res) {
   res.send("Api is working Properly.")
});

module.exports = router;