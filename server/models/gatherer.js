var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Gatherer = new Schema({
    name: String
})


module.exports = mongoose.model('gatherers', Gatherer);