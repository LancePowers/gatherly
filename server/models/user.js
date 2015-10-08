var mongoose = require('mongoose-q')(require('mongoose'), {
    spread: true
});
var Schema = mongoose.Schema;

var User = new Schema({
    name: String,
    email: String,
    phone: String,
    answers: [{
        question: String,
        answer: String
    }],
    image: String
})

module.exports = mongoose.model('users', User)