const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors());
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
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());


const fitnessClassRouter = require('./routes/fitness-class');
const userRouter = require('./routes/users');

app.use('/fitness-class', fitnessClassRouter);
app.use('/users', userRouter);

app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
});
