var db = require('../../models/user.js');
var request = require('request');

// *** Populate Characters From IMGs *** //

var categories = {
    '1': 'action-hero',
    '2': 'disney-character'
}

var fs = require('fs'),
    EventEmitter = require('events').EventEmitter,
    filesEE = new EventEmitter(),
    myfiles = [];

//called when all files have been added 
filesEE.on('files_ready', function () {
    myfiles.forEach(
        function (val, i, array) {
            if (val.substr(28, 3) === 'jpg') {
                catCode = val.charAt(26);
                console.log('Before Save ' + categories[catCode]);
                var group = categories[catCode]
                db.Character.findOne({
                        image: val
                    }).then(function (result) {
                        if (result) {
                            console.log('Already Saved ' + result)
                        } else {
                            new db.Character({
                                    image: val,
                                    group: group,
                                    world: val.charAt(21),
                                    information: val.charAt(22),
                                    decision: val.charAt(23),
                                    structure: val.charAt(24)
                                }).saveQ()
                                .then(function (result) {
                                    console.log('After Save ' + result)
                                })
                                .catch(function (err) {
                                    console.log(err);
                                })
                                .done();
                        }
                    }).catch(function (err) {
                        res.json(err);
                    })
                    .done();
            }
        });
});

// read all files from current directory
fs.readdir('./server/img/characters', function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
        myfiles.push(file);
    });
    filesEE.emit('files_ready'); // trigger files_ready event
});