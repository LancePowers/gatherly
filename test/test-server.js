process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var expect = chai.expect;
var should = chai.should();
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

describe('Post a new user', function () {
    describe('should be successful', function () {
        it('in saving a new user to the database', function (done) {
            chai.request(server)
                .post('/api/user')
                .send({
                    name: 'patrick',
                    email: 'pattyBoy@gmail.com',
                    phone: '244-345-3565',
                    answers: [{
                            question: 'If you were to meet a martian at a bar, the first 5 words out of your mouth would be...',
                            answer: 'Holy Fuck! You are a'
                                    },
                        {
                            question: 'What would you name your pet robot?',
                            answer: 'PupBot'
                                    }
                                             ],
                    image: 'https://lh3.googleusercontent.com/-o4dgi2oFgH0/VXBe7c_8TpI/AAAAAAAAA3U/6jengDoRUCk/w280-h280-p/11392929_10103203266255643_1188129424666658964_n.jpg'
                })
                .end(function (err, res) {
                    res.should.be.json;
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.SUCCESS.should.have.property('name');
                    res.body.SUCCESS.name.should.equal('patrick');
                    res.body.SUCCESS.should.have.property('email');
                    res.body.SUCCESS.email.should.equal('pattyBoy@gmail.com');
                    res.body.SUCCESS.should.have.property('phone');
                    res.body.SUCCESS.phone.should.equal('244-345-3565');
                    res.body.SUCCESS.should.have.property('answers');
                    res.body.SUCCESS.answers[0].should.have.property('question');
                    res.body.SUCCESS.answers[0].question.should.equal('If you were to meet a martian at a bar, the first 5 words out of your mouth would be...');
                    res.body.SUCCESS.answers[0].should.have.property('answer');
                    res.body.SUCCESS.answers[0].answer.should.equal('Holy Fuck! You are a');
                    res.body.SUCCESS.should.have.property('image');
                    res.body.SUCCESS.image.should.equal('https://lh3.googleusercontent.com/-o4dgi2oFgH0/VXBe7c_8TpI/AAAAAAAAA3U/6jengDoRUCk/w280-h280-p/11392929_10103203266255643_1188129424666658964_n.jpg');
                    done();
                });
        });
    });
});


//Not sure get all will be
describe('Get all users', function () {
    describe('should be successful', function () {
        it('in getting all users from the database', function (done) {
            chai.request(server)
                .get('/api/user')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body[0].should.have.property('name');
                    res.body[0].should.have.property('email');
                    res.body[0].should.have.property('phone');
                    res.body[0].should.have.property('answers');
                    res.body[0].should.have.property('image');
                    done();
                });
        });
    });
});