var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(
    path.resolve(__dirname, '..', 'client/build'),
    { maxAge: '30d' },
  ));

  server.get('/*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
  })
}
else {
  app.use(express.static(
    path.resolve(__dirname, '..', 'client/public'),
    { maxAge: '30d' },
  ));
}

//error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development//
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
