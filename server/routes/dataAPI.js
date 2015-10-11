var express = require('express');
var dataRouter = express.Router();
var passport = require('passport');
var Data = require('../models/user.js');


module.exports = dataRouter