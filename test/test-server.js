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
        it('in creating an experience', function (done) {
            var id;
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
                    id = res.body._id;
                    done();
                });
        });


        it('in retrieving an experience', function (done) {
            chai.request(server)
                .get('/data/experience/561ae6695c48686b27889217')
                //                .send({
                //                    id: '561ae6695c48686b27889217'
                //                })
                .end(function (err, res) {
                    console.log(res.body);
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    res.body.name.should.equal('Platte Patio Sunrise Surprise');
                    done();
                });
        });


        it('in retrieving images for an experience', function (done) {
            chai.request(server)
                .get('/data/image')
                .send({
                    id: '561ae6695c48686b27889217'
                })
                .end(function (err, res) {
                    console.log(res.body)
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body[0]._id.should.equal('561ae6695c48686b2788921a');
                    done();
                });
        });
    });
});

//describe serve a character set
//describe serve a gather
//describe serve a