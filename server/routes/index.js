var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Gatherer = require('../models/gatherer');



router.get('/', function (req, res, next) {
    res.send('hello');
    res.render('../../client/views/landing-page.html');
});

module.exports = router;