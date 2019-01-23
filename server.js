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
