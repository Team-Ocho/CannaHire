var express = require("express")
var mysql = require("mysql")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
const { check, validationResult } = require("express-validator/check")

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
  function (username, password, done) {
    const connection = require("./config/connection.js")

    connection.query("SELECT id, password FROM users WHERE username = ?", [username], function (err, results, fields) {
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

app.post("/register", [
  check("username")
    .not()
    .isEmpty().withMessage("Username field must not be blank")
], function (req, res) {
  const errors = validationResult(req)
  console.log("Something happened Server")

  if (!errors.isEmpty()) {
    console.log(errors.mapped())
    res.redirect("/register")
  } else {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    // Store hash in your password DB.
    connection.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password], function (err, results, fields) {
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

app.post('/login',
  passport.authenticate('local'),
  function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
