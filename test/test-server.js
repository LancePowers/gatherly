process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var expect = chai.expect;
var should = chai.should();
var User = require('../server/models/user.js').User;
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