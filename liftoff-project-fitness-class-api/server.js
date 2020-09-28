const express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fitnessClassRouter = require('./routes/fitness-class');
const userRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use(cors({
    origin:['http://localhost:4200', 'http://127.0.0.1:4200'],
    credentials: true
}))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//passport
var passport = require('passport');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
    name: 'myname.sid',
    resave:false,
    saveUninitialized:false,
    secret: 'secret',
    cookie: {
        maxAge: 36000000,
        httpOnly:false,
        secure:false
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })

}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/fitness-class', fitnessClassRouter);
app.use('/users', userRouter);

app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
});


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