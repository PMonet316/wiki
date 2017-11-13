// var app = require('./app.js');
var models = require('../models')
var express = require('express');
var parser = require('body-parser');
var router = express.Router();
var wikiRouter = require('./wiki');
var userRouter = require('./user');


// app.get('./models')


router.use('/wiki', wikiRouter);
// router.use('/user', userRouter);

module.exports = router;
  // wikiRouter: wikiRouter,
  // userRouter: userRouter
