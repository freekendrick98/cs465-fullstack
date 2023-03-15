const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');

//const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');
const travelRouter = require('./app_server/routes/travel');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));

//register handlebars partials (https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.get('/contact', (req, res) => res.render('contact', {contactSelected: req.path == '/contact'}));
app.get('/about', (req, res) => res.render('about', {contactSelected: req.path == '/about'}));
app.get('/meals', (req, res) => res.render('meals', {contactSelected: req.path == '/meals'}));
app.get('/news', (req, res) => res.render('news', {contactSelected: req.path == '/news'}));
app.get('/rooms', (req, res) => res.render('rooms', {contactSelected: req.path == '/rooms'}));
app.get('/index', (req, res) => res.render('index', {contactSelected: req.path == '/index'}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
