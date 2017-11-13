var models = require('../models');
var express = require('express');
var parser = require('body-parser');
var router = express.Router();
var wikiRouter = require('./wiki');
var userRouter = require('./user');
var Page = models.Page;
var User = models.User;
// var views = require('../views')

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});




router.post('/', function(req, res, next) {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
console.log(req.body)
  var page = Page.build({
    title: req.body.title,
    content: req.body.content,
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save()
  .then(res.redirect('/'));
  // -> after save -> res.redirect('/');
});

// router.post('/', function(req, res, next) {
//   res.send('got to POST /wiki/');
// });

// router.get('/add', function(req, res, next) {
//   res.send('got to GET /wiki/add');
// });

router.post('/', function(req, res, next) {
  console.log(req.body)

  res.json(req.body);
})

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
  // next();
});

module.exports = router;
