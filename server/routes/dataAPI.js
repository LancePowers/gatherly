var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../models/user.js');
var query = require('../queries/query.js')


// *** EXPERIENCE *** //

router.post('/experience', function (req, res, err) {
    console.log('experience');
    new db.Experience({
            name: req.body.name,
            description: req.body.description,
            edds: req.body.edds
        }).saveQ()
        .then(function (result) {
            query.saveImages(result[0]._id, req.body.images);
            res.json(result);
        })
        .catch(function (err) {
            res.json(err);
        })
        .done();
})

router.get('/experiences', function (req, res, err) {
    console.log('get experience')
    db.Experience.findQ()
        .then(function (result) {
            res.json(result);
        })
        .catch(function (err) {
            console.log(err);
            res.json(err);
        })
        .done();
});


router.get('/experience/:id', function (req, res, err) {
    console.log('get experience by id')
    db.Experience.findByIdQ(req.params.id)
        .then(function (result) {
            res.json(result);
        })
        .catch(function (err) {
            console.log(err);
            res.json(err);
        })
        .done();
});

// *** IMAGE *** //

router.get('/image/:id', function (req, res, err) {
    db.Image.findQ({
            experienceID: req.params.id
        })
        .then(function (result) {
            res.json(result);
        })
        .catch(function (err) {
            res.json(err);
        })
        .done();
})


// *** CHARACTER *** //

router.get('/character/:id', function (req, res, err) {
    db.Character.find({
            group: req.params.id
        })
        .then(function (result) {
            res.json(result);
        })
        .catch(function (err) {
            res.json(err);
        })
        .done();
})


router.post('/character', function (req, res, err) {
    db.Character.findOne({
            image: req.body.image
        }).then(function (result) {
            if (result) {
                res.json(result);
            } else {
                new db.Character({
                        name: req.body.name,
                        image: req.body.image,
                        group: req.body.group,
                        world: req.body.world,
                        information: req.body.information,
                        decision: req.body.decision,
                        structure: req.body.structure
                    }).saveQ()
                    .then(function (result) {
                        res.json(result)
                    })
                    .catch(function (err) {
                        res.json(err);
                    })
                    .done();
            }
        }).catch(function (err) {
            res.json(err);
        })
        .done();
});



// *** GATHER *** //
router.post('/gather', function (req, res, err) {
    console.log('gather');
    new db.Gather({
            name: req.body.name,
            description: req.body.description,
            edds: req.body.edds
        }).saveQ()
        .then(function (result) {
            query.saveImages(result[0]._id, req.body.images);
            res.json(result);
        })
        .catch(function (err) {
            res.json(err);
        })
        .done();
})

module.exports = router