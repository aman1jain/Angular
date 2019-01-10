var express = require('express');
var  bodyparser = require('body-parser');
var mysql = require('mysql');
// var cors = require('cors');
// var mongoose = require('mongoose');
// var schema = require(Schema);
// var cors = require('cors');
var app = express();

// app.use(cors({
    // origin:['http://localhost:4200'],
    // credentials:true
// }));
var bcrypt = require('bcrypt');
const saltRounds = 10;
// const Password = req.body.password;
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
var router = require('./routers/router');
app.use('/services',router);


//passport///30-10-18
var passport = require('passport');
var session = require('express-session');

app.use(session({
    name: 'myname.sid',
    resave:false,
    saveUninitialized:false,
    secret:'secret',
    cookie:{
        maxAge:36000000,
        httpOnly:false,
        secure:false
    }

}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());
//passport end///////TOday  code//end

app.listen(3000);
