var express = require("express")
var mysql = require("mysql")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")

require("dotenv").config();

// Authentication Routes
const session = require("express-session")
const passport = require("passport")
var MySQLStore = require('express-mysql-session')(session)
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
const routes = require('./route')
const saltRounds = 10

var app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser())

var PORT = process.env.PORT || 8080;

var connection;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.db_host,
    // Your port; if not 3306
    port: process.env.db_port,
    // Your username
    user: process.env.db_user,
    // Your password
    password: process.env.db_password,
    database: "cannahire"
  });
};
let options = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "cannahire"
}

var sessionStore = new MySQLStore(options);

app.use(session({
  secret: 'hsudhihsduiuh',
  resave: false,
  store: sessionStore,
  saveUninitialized: false,
  // cookie: { secure: true }
}))

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId)
});

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  function (email, password, done) {
    console.log("auth is goin")
    connection.query("SELECT id, password FROM user_login WHERE email = ?", [email], function (err, results, fields) {
      if (err) { done(err) }

      if (results.length === 0) {
        done(null, false)
      } else {
        const hash = results[0].password.toString()
        bcrypt.compare(password, hash, function (err, response) {

          if (response === true) {
            console.log(results[0])
            console.log("log in totally worked")
            return done(null, { user_id: results[0].id })

          } else {
            console.log("WRONG!")
            return done(null, false)
          }
        })
      }
    })
  }
))

app.use(routes(connection))

passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
  done(null, user_id);
});

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT)
})
