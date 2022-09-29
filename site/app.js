var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');
var { engine }   = require('express-handlebars');
var reload       = require('reload');

var indexRouter          = require('./routes/index');
var usersRouter          = require('./routes/users');
var aboutRouter          = require('./routes/about');
var articlesRouter       = require('./routes/articles');
var codeChallengesRouter = require('./routes/code_challenges');
var experienceRouter     = require('./routes/experience');

var app = express();

app.engine('handlebars', engine({}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/articles', articlesRouter);
app.use('/code_challenges', codeChallengesRouter);
app.use('/experience', experienceRouter);

reload(app);

module.exports = app;
