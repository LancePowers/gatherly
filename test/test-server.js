process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var expect = chai.expect;
var should = chai.should();
var db = require('../server/models/user.js')
var User = db.User;
var Gather = db.Gather;
var Experience = db.Experience;
var Mee = db.Mee;
var Image = db.Image;
var Connection = db.Connection;
var Relationship = db.Relationship;
var Character = db.Character;
var Role = db.Role;
chai.use(chaiHttp);

// TEST TEMPLATE
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//describe('somefunction', function () {
//        describe('should be successful', function () {
//            it('in performing some test', function (done) {
//                chai.request(server)
//                    .post('/api/... ')
//                    .send({
//                        'name': 'patrick',
//                        'age': '33'
//                    })
//                    .end(function (err, res) {
//                        res.should.have.status(200);
//                        res.should.be.json;
//                        res.should.be.a('object');
//                        res.body.SUCCESS.should.have.property('name');
//                        res.body.SUCCESS.name.should.equal('tina');
//                        res.body.SUCCESS.age.should.equal(33);
//                        done();
//                    });
//            });
//        });
//    });
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

describe('Register a new user', function () {
    describe('should be successful', function () {
        User.collection.drop();
        it('in saving a new user to the database', function (done) {
            chai.request(server)
                .post('/auth/register')
                .send({
                    username: 'pdizzle',
                    name: 'patrick',
                    email: 'pattyBoy@gmail.com',
                    image: 'https',
                    password: 'abc123'
                })
                .end(function (err, res) {

                    res.should.be.json;
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.username.should.equal('pdizzle');
                    done();
                });
        });
    });
});



describe('Log in', function () {
    describe('should be successful', function () {
        it('in getting profile information', function (done) {
            chai.request(server)
                .post('/auth/login')
                .send({
                    username: 'pdizzle',
                    password: 'abc123'
                })
                .end(function (err, res) {
                    res.should.be.json;
                    res.should.have.status(200);
                    res.body.status.should.equal('login successful!');
                    done();
                });
        });
    });
});



describe('Serve an experience', function () {
    describe('should be successful', function () {
        //        Experience.collection.drop();
        //        Image.collection.drop();
        var id = 0;
        it('in creating an experience', function (done) {
            chai.request(server)
                .post('/data/experience')
                .send({
                    'name': 'Platte Patio Sunrise Surprise',
                    'description': 'Have a cup of joe, take in the views for a bit, and see the largest concentration of hipsters with macbooks in all of Denver',
                    'edds': 'Drink',
                    'images': ['patio.img', 'skyline.png', 'homelessGuyTakingAPiss.jpg'],
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    res.body[0].should.have.property('name');
                    res.body[0].name.should.equal('Platte Patio Sunrise Surprise');
                    res.body[0].name.length.should.be.below(30);
                    res.body[0].should.have.property('description');
                    res.body[0].description.should.equal('Have a cup of joe, take in the views for a bit, and see the largest concentration of hipsters with macbooks in all of Denver');
                    res.body[0].description.length.should.be.below(140);
                    res.body[0].should.have.property('edds');
                    id = res.body[0]._id;
                    done();
                });
        });



        it('in retrieving an experience', function (done) {
            console.log(id);
            chai.request(server)
                .get('/data/experience/' + id)
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    res.body.name.should.equal('Platte Patio Sunrise Surprise');
                    done();
                });
        });


        it('in retrieving images for an experience', function (done) {
            chai.request(server)
                .get('/data/image/' + id)
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body[0].image.should.equal('patio.img');
                    done();
                });
        });


        it('in retrieving all experiences', function (done) {
            chai.request(server)
                .get('/data/experiences')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});


// *** Character Testing *** //


describe('Character management', function () {
    describe('should be successful', function () {
        Character.collection.drop();
        var id = 0;
        it('in adding a character', function (done) {
            chai.request(server)
                .post('/data/character')
                .send({
                    'image': 'http://cdn.playbuzz.com/cdn/8de88741-d729-4319-aa46-e8a544a20439/f7cade9d-8daf-42b3-8839-3e0e1f3db283.jpeg',
                    'group': 'Harry Potter',
                    'world': 'i',
                    'information': 's',
                    'decision': 't',
                    'structure': 'p'
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    console.log(res.body)
                    res.body[0].image.should.equal('http://cdn.playbuzz.com/cdn/8de88741-d729-4319-aa46-e8a544a20439/f7cade9d-8daf-42b3-8839-3e0e1f3db283.jpeg');
                    res.body[0].group.should.equal('Harry Potter');
                    res.body[0].should.have.property('world');
                    res.body[0].world.should.equal('i');
                    id = res.body[0]._id;
                    done();
                });
        });
        it('in not saving the same character twice', function (done) {
            chai.request(server)
                .post('/data/character')
                .send({
                    'name': 'Harry Potter',
                    'image': 'http://cdn.playbuzz.com/cdn/8de88741-d729-4319-aa46-e8a544a20439/f7cade9d-8daf-42b3-8839-3e0e1f3db283.jpeg',
                    'group': 'Harry Potter',
                    'world': 'i',
                    'information': 's',
                    'decision': 't',
                    'structure': 'p'
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    res.body._id.should.equal(id);
                    done();
                });
        });


        it('in getting a character set', function (done) {
            chai.request(server)
                .get('/data/character/disney-character')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    res.body.length.should.equal(16);
                    done();
                });
        });
    });
});


//describe('Post a gather', function () {
//    describe('should be successful', function () {
//        it('in creating a new gather', function (done) {
//            chai.request(server)
//                .post('/data/gather')
//                .send({
//                    'name': 'patrick',
//                    'age': '33'
//                })
//                .end(function (err, res) {
//                    res.should.have.status(200);
//                    res.should.be.json;
//                    res.should.be.a('object');
//                    res.body.SUCCESS.should.have.property('name');
//                    res.body.SUCCESS.name.should.equal('tina');
//                    res.body.SUCCESS.age.should.equal(33);
//                    done();
//                });
//        });
//    });
//});
//describe serve a