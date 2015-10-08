var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Gatherer = require('../models/gatherer');



router.get('/', function (req, res, next) {
    res.render('../views/test.html');
});

module.exports = router;