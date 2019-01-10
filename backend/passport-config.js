//For login Authentication###//
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var user = require('./routers/model/user');
var mysql = require('mysql');
email:String;
username:String;
password:String

// email: { type:String,require:true},
// username: { type:String,require:true},
// password:{ type:String,require:true},
// creation_dt:{type:Date,require:true}
passport.use('local',new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},
  function(username, password, done) {
      console.log('####',email,password);
    user.student_db({ email: username}, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.password(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

//configuration
passport.serializeUser(function(user, done) {
    done(null, user.studentid);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
