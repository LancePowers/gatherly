var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../models/user.js');
var query = require('../queries/query.js')


// *** Serve an Experience *** //

router.post('/experience', function (req, res, err) {
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

router.get('/experience', function (req, res, err) {
    db.Experience.findByIdQ(req.body.id)
        .then(function (result) {
            db.Image.findQ({
                    experienceID: req.body.id
                })
                .then(function (result) {
                    console.log(result);
                })
                .catch(function (err) {
                    console.log(err);
                })
                .done();
            console.log(result)
        })
        .catch(function (err) {
            console.log(err);
            res.json(err);
        })
        .done();
});
module.exports = router