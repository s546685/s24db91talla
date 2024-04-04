// Import dotenv and configure it to load environment variables from a .env filrequire('dotenv').config();

// Import mongoose for MongoDB database connection
let mongoose = require('mongoose');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gRouter = require('./routes/grid');
var rRouter = require('./routes/pick');
var wRouter = require('./routes/watches');
var watches = require('./models/watches');
var resourceRouter = require("./routes/resource")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grid', gRouter);
app.use('/img', rRouter);
app.use('/watches', wRouter);
app.use('/resource', resourceRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await watches.deleteMany();
  let instance1 = new
    watches({
      watches_brand: "apple", watches_type: 'fitness',
      cost: 1500
    });
  instance1.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  let instance2 = new
    watches({
      watches_brand: "sonata", watches_type: 'wrist',
      cost: 150
    });
  instance2.save().then(doc => {
    console.log("second object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  let instance3 = new
    watches({
      watches_brand: "noise", watches_type: 'smart',
      cost: 105
    });
  instance3.save().then(doc => {
    console.log("Third object saved")
  }
  ).catch(err => {
    console.error(err)
  });
}
let reseed = true;
if (reseed) { recreateDB(); }

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
})

module.exports = app;
