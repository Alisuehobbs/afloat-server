var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var signup = require('./routes/signup');
var login = require('./routes/login');
var moods = require('./routes/moods');
var activities = require('./routes/activities');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/signup', signup);
app.use('/login', login);
app.use('/moods', moods);
app.use('/activities', activities);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    if (app.get('env') !== 'development') {
        // eslint-disable-next-line no-console
        console.log('Listening on port', port);
    }
});

module.exports = app;
