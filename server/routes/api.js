var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'), {
    spread: true
});
var User = require('../models/user');
//var Gatherer = require('../models/gatherer');


// User CRUD
router.get('/user', function (req, res, next) {
    User.findQ()
        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            res.send(err)
        })
        .done();
});
router.post('/user', function (req, res, next) {

    var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        answers: req.body.answers,
        image: req.body.image
    });
    //    console.log('here');
    newUser.saveQ()
        .then(function (result) {
            res.json({
                "SUCCESS": result[0]
            });
        })
        .catch(function (err) {
            res.send(err)
        })
        .done();
});
router.get('/user/:id', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.put('/user/:id', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.delete('/user/:id', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;