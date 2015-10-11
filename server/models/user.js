var mongoose = require('mongoose-q')(require('mongoose'), {
    spread: true
});
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    first: String,
    last: String,
    username: String,
    email: String,
    image: String
})


var Gather = new Schema({
    date: Date
})

var Experience = new Schema({
    name: String,
    description: String,
    edds: String,
})

var Mee = new Schema({
    world: String,
    information: String,
    decision: String,
    structure: String,
    experienceID: String,
    gatherID: String,
    userID: String,
    characterID: String,
    connectionID: String,
    roleID: String
})

var Image = new Schema({
    gatherID: String,
    experienceID: String,
    userID: String,
    image: String
})

var Connection = new Schema({
    relationshipID: String,
    rating: Number,
    blocked: Boolean,
    family: Boolean
})

var Relationship = new Schema({
    sourceID: String,
    subjectID: String,
    status: String
})

var Character = new Schema({
    image: String,
    group: String
})

var Role = new Schema({
    name: String,
    description: String
})

User.plugin(passportLocalMongoose);

module.exports = {
    User: mongoose.model('users', User),
    Gather: mongoose.model('gathers', Gather),
    Experience: mongoose.model('experiences', Experience),
    Mee: mongoose.model('mees', Mee),
    Image: mongoose.model('images', Image),
    Connection: mongoose.model('connections', Connection),
    Relationship: mongoose.model('relationships', Relationship),
    Character: mongoose.model('characters', Character),
    Role: mongoose.model('roles', Role),
}