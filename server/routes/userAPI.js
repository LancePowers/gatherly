var express = require('express');
var router = express.Router();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var User = require('../models/user.js').User;

passport.use(new Strategy(
    function (username, password, cb) {
        db.users.findByUsername(username, function (err, user) {
            if (err) {
                return cb(err);
            }
            if (!user) {
                return cb(null, false);
            }
            if (user.password != password) {
                return cb(null, false);
            }
            return cb(null, user);
        });
    }));


passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});


passport.deserializeUser(function (id, cb) {
    db.users.findById(id, function (err, user) {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
});



router.post('/register', function (req, res) {
    console.log('register')
    User.register(new User({
        username: req.body.username
    }), req.body.password, function (err, account) {
        if (err) {
            console.log('registration error')
            return res.status(500).json({
                err: err
            });
        }
        res.json(account);
    });
});


router.post('/login', function (req, res, next) {

    User.findOne({
        "username": req.body.username
    }, function (err, user) {
        user.authenticate(req.body.password, function (err, user, info) {

            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(401).json({
                    err: info
                });
            }
            req.logIn(user, function (err) {
                if (err) {
                    return res.status(500).json({
                        err: 'Could not log in user'
                    });
                }
                res.status(200).json({
                    status: 'login successful!'
                });
            });
        });
    });

});

//passport.authenticate('local', function (err, user, info) {
//        console.log('err');
//        if (err) {
//            return next(err);
//        }
//        if (!user) {
//            return res.status(401).json({
//                err: info
//            });
//        }
//        req.logIn(user, function (err) {
//            if (err) {
//                return res.status(500).json({
//                    err: 'Could not log in user'
//                });
//            }
//            res.status(200).json({
//                status: 'Login successful!'
//            });
//        });
//    });

router.get('/logout', function (req, res) {
    console.log('logout');
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});

module.exports = router;