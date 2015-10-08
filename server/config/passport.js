// load all the things we need
//var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
//var TwitterStrategy = require('passport-twitter').Strategy;
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//var LinkedInStrategy = require('passport-linkedin');
// load up the user model
var User = require('../models/user');
// load the auth variables
var configAuth = require('./auth');
module.exports = function (passport) {
    // passport session setup
    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
    // LOCAL SIGNUP
//    passport.use('local-signup', new LocalStrategy({
//            usernameField: 'email',
//            passwordField: 'password',
//            passReqToCallback: true
//        },
//        function (req, email, password, done) {
//            process.nextTick(function () {
//                User.findOne({
//                    'local.email': email
//                }, function (err, user) {
//                    if (err)
//                        return done(err);
//                    if (user) {
//                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
//                    } else {
//                        var newUser = new User();
//                        newUser.local.email = email;
//                        newUser.local.password = newUser.generateHash(password);
//                        newUser.save(function (err) {
//                            if (err)
//                                throw err;
//                            return done(null, newUser);
//                        });
//                    }
//                });
//            });
//        }));
//    // LOCAL LOGIN =====================
//    passport.use('local-login', new LocalStrategy({
//            usernameField: 'email',
//            passwordField: 'password',
//            passReqToCallback: true //
//        },
//        function (req, email, password, done) {
//            User.findOne({
//                'local.email': email
//            }, function (err, user) {
//                if (err)
//                    return done(err);
//                if (!user)
//                    return done(null, false, req.flash('loginMessage', 'No user found.'));
//                if (!user.validPassword(password))
//                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); //
//                return done(null, user);
//            });
//        }));
    passport.use(new FacebookStrategy({
            clientID: configAuth.facebookAuth.clientID,
            clientSecret: configAuth.facebookAuth.clientSecret,
            callbackURL: configAuth.facebookAuth.callbackURL
        },
        function (token, refreshToken, profile, done) {
            process.nextTick(function () {
                User.findOne({
                    'facebook.id': profile.id
                }, function (err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, user);
                    } else {
                        var newUser = new User();
                        newUser.facebook.id = profile.id;
                        newUser.facebook.token = token;
                        newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.facebook.email = profile.emails[0].value;
                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));
//    passport.use(new TwitterStrategy({
                //            consumerKey: configAuth.twitterAuth.consumerKey,
                //            consumerSecret: configAuth.twitterAuth.consumerSecret,
                //            callbackURL: configAuth.twitterAuth.callbackURL
                //        },
                //        function (token, tokenSecret, profile, done) {
                //            process.nextTick(function () {
                //                User.findOne({
                //                    'twitter.id': profile.id
                //                }, function (err, user) {
                //                    if (err)
                //                        return done(err);
                //                    if (user) {
                //                        return done(null, user);
                //                    } else {
                //                        var newUser = new User();
                //                        newUser.twitter.id = profile.id;
                //                        newUser.twitter.token = token;
                //                        newUser.twitter.username = profile.username;
                //                        newUser.twitter.displayName = profile.displayName;
                //                        newUser.save(function (err) {
                //                            if (err)
                //                                throw err;
                //                            return done(null, newUser);
                //                        });
                //                    }
                //                });
                //            });
                //        }));
                //    passport.use(new LinkedInStrategy({
                //            consumerKey: configAuth.linkedinAuth.consumerKey,
                //            consumerSecret: configAuth.linkedinAuth.consumerSecret,
                //            callbackURL: configAuth.linkedinAuth.callbackURL
                //        },
                //        function (token, tokenSecret, profile, done) {
                //            console.log(profile);
                //            var searchQuery = {
                //                name: profile.displayName
                //            };
                //            var updates = {
                //                name: profile.displayName,
                //                oauthID: profile.id
                //            };
                //            var options = {
                //                upsert: true
                //            };
                //            User.findOneAndUpdate(searchQuery, updates, options, function (err, user) {
                //                if (err) {
                //                    return done(err);
                //                } else {
                //                    return done(null, user);
                //                }
                //            });
                //        }
                //    ));
};