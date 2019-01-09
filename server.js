var express = require("express")
var mysql = require("mysql")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")

// Authentication Routes
const session = require("express-session")
const passport = require("passport")
var MySQLStore = require('express-mysql-session')(session)
const LocalStrategy = require("passport-local").Strategy

var app = express()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'INSERTDBNAMEHERE'
})

connection.connect(err => {
  if (err) {
    return err
  }
})

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    const connection = require("./config/connection.js")

    connection.query("SELECT id, password FROM users WHERE username = ?", [username], function (err, results, fields){
      if (err) {done(err)}
      
      if (results.length === 0) {
        done(null, false)
      } else {
          const hash = results[0].password.toString()
        
          if(password === hash) {
          
            console.log("log in totally worked")
            return done(null, {user_id: results[0].id})
        
          } else {
          
            return done(null, false)
          }
      }
    })
  }
))

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
