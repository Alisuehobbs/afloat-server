var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var signup = require('./routes/signup');
var login = require('./routes/login');
var correlations = require('./routes/correlations');
var moods = require('./routes/moods');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/signup', signup);
app.use('/login', login);
app.use('/correlations', correlations);
app.use('/moods', moods);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    if (app.get('env') !== 'development') {
        // eslint-disable-next-line no-console
        console.log('Listening on port', port);
    }
});

module.exports = app;
