const PORT = 3000;
var morgan = require('morgan');
var express = require('express');
var parser = require('body-parser');
var nunjucks = require('nunjucks');
// const router = require(`./models/index.js`);
var models = require('./models');
var routes = require('./routes');


const app = express();

app.use(parser.json());
app.use(parser.urlencoded());

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

models.db.sync({})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(PORT, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);

// models.db.sync({force: true})

app.use(routes);

app.get('/', function (req, res) {
  res.send('server listening');
});
