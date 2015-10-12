var express = require('express');
var db = require('../models/user');
var router = express.Router();
//var mongoose = require('mongoose-q')(require('mongoose'), {
//    spread: true
//});


function saveImages(id, images) {
    console.log(images);
    for (var i = 0; i < images.length; i++) {
        new db.Image({
                experienceID: id,
                image: images[i]
            }).saveQ()
            .then(function (result) {
                //                console.log(result);
            })
            .catch(function (err) {
                console.log(err);
            })
            .done();
    }
}

function getImages(id, res) {
    console.log('!!!!in getImage !!!!!');
    db.Image.findQ({
            experienceID: id
        })
        .then(function (result) {
            return result;
        })
        .catch(function (err) {
            console.log(err);
        })
        .done();
}



//
//var updateExperience = function () {
//
//}


module.exports = {
    //    constructExperience: constructExperience,
    //    constructGather: gather,
    //    constructCharacterSet: character,
    saveImages: saveImages,
    getImages: getImages
        //        saveGather: saveGather,
        //    saveCharacter: saveCharacter,
        //    updateGather: updateGather,
        //    updateExperience: updateExperience
}