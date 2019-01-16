var express = require("express")
var mysql = require("mysql")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
const { check, validationResult } = require("express-validator/check")
require("dotenv").config();

// Authentication Routes
const session = require("express-session")
const passport = require("passport")
var MySQLStore = require('express-mysql-session')(session)
const LocalStrategy = require("passport-local").Strategy

var app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser())

var PORT = process.env.PORT || 8080;

var connection;

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
  function (email, password, done) {
    console.log("auth is goin")
    connection.query("SELECT user_id, password FROM applicant_login WHERE email = ?", [email], function (err, results, fields) {
      if (err) { done(err) }

      if (results.length === 0) {
        done(null, false)
      } else {
        const hash = results[0].password.toString()

        if (password === hash) {

          console.log("log in totally worked")
          return done(null, { user_id: results[0].id })

        } else {

          return done(null, false)
        }
      }
    })
  }
))
app.post("/loginPLEASE", passport.authenticate(
  "local", {
      successRedirect: "/",
      failureRedirect: "/register"
  }
))
app.post("/register", function (req, res) {
  const errors = validationResult(req)
  console.log("Something happened Server")
  console.log(req.body)

  if (!errors.isEmpty()) {
    console.log(errors.mapped())
    res.redirect("/register")
  } else {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const password = req.body.password
    const email = req.body.email

    // Store hash in your password DB.
    connection.query("INSERT INTO applicant_login (first_name, last_name, email, password) VALUES (?, ?, ?, ?)", [firstName, lastName, email, password], function (err, results, fields) {
      if (err) throw err
      connection.query("SELECT LAST_INSERT_ID() as user_id", function (error, results, fields) {
        if (error) throw error
        const user_id = results[0]

        req.login(user_id, function (err) {
          res.end()
        })
      })
    })
  }
})

app.post("/companyregister", function (req, res) {
  const errors = validationResult(req)
  console.log("Something happened Server")
  console.log(req.body)

  if (!errors.isEmpty()) {
    console.log(errors.mapped())
    res.redirect("/register")
  } else {
    const companyName = req.body.companyName
    const website = req.body.website
    const password = req.body.password
    const email = req.body.email

    // Store hash in your password DB.
    connection.query("INSERT INTO company_login (company_name, company_website, company_email, password) VALUES (?, ?, ?, ?)", [companyName, website, email, password], function (err, results, fields) {
      if (err) throw err
      connection.query("SELECT LAST_INSERT_ID() as user_id", function (error, results, fields) {
        if (error) throw error
        const user_id = results[0]

        req.login(user_id, function (err) {
          res.redirect("/")
        })
      })
    })
  }
})

app.post('/app/login',
  passport.authenticate('local'),
  function (req, res) {
    console.log("did something")
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

app.get('/jobs/postings', function (req, res) {
  connection.query("SELECT * FROM job_postings", function (err, result) {
    if (err) throw err

    res.json(result)
  })
})

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT)
})
