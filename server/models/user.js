var mongoose = require('mongoose-q')(require('mongoose'), {
    spread: true
});
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    first: String,
    last: String,
    username: String,
    email: String
})


var Gather = new Schema({
    //
    experienceID1: String,
    experienceID2: String,
    experienceID3: String
        // role ids
        //Mee id

})

var gatherExperience = new Schema({
    gatherID: String,
    experienceID: String
})


var Experience = new Schema({
    name: String,
    description: String,
    edds: String,
    ownerID: String,
})

var Role = new Schema({
    gatherID: String,
    userID: String,
    name: String,
    rating: String,
    characterID: String
})

var Image = new Schema({
    experienceID: String,
    userID: String,
    image: String
})


var Character = new Schema({
    name: String,
    image: String,
    group: String,
    world: String,
    information: String,
    decision: String,
    structure: String
})

User.plugin(passportLocalMongoose);

module.exports = {
    User: mongoose.model('users', User),
    Gather: mongoose.model('gathers', Gather),
    Experience: mongoose.model('experiences', Experience),
    Image: mongoose.model('images', Image),
    Character: mongoose.model('characters', Character),
    Role: mongoose.model('roles', Role)
}