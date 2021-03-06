var createError = require('http-errors');
var compression = require('compression');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./src/routes');

var app = express();

app.set('view engine', 'html');

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', apiRouter);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(
    express.static(path.resolve(__dirname, '..', 'client/build'), {
      maxAge: '30d'
    })
  );

  app.get(/.+[^api]/, function(req, res) {
    res.sendFile(
      path.resolve(__dirname, '..', 'client/build/index.html'),
      function(err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
} else {
  app.use(
    express.static(path.resolve(__dirname, '..', 'client/public'), {
      maxAge: '30d'
    })
  );
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
