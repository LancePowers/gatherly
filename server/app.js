// *** main dependencies *** //
var express = require('express');
var passport = require('passport');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('../_config.js');
var session = require('express-session');
var flash = require('connect-flash');
//var populateCharacters = require('./img/characters/populate-character.js')

// *** routes *** //
var authRoutes = require('./routes/userAPI.js');
var dataRoutes = require('./routes/dataAPI.js');

// *** express instance *** //
var app = express();


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// *** main routes *** //


app.use('/auth', authRoutes);
app.use('/data', dataRoutes);
app.use('/', function (req, res) {
    console.log('main');
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
});


// *** mongoose *** ///


mongoose.connect(config.mongoURI[app.settings.env], function (err, res) {
    if (err) {
        console.log('Error connecting to the database. ' + err);
    } else {
        console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
    }
});


// *** error handlers *** //


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).json({
            status: 'Error!',
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        status: 'Error!'
    });
});


module.exports = app;