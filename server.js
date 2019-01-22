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
const bcrypt = require("bcrypt")
const saltRounds = 10

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
    bcrypt.hash(password, saltRounds, function (err, hash) {
      // Store hash in your password DB.
      connection.query("INSERT INTO user_login (first_name, last_name, email, password) VALUES (?, ?, ?, ?)", [firstName, lastName, email, hash], function (err, results, fields) {
        if (err) throw err
        connection.query("SELECT LAST_INSERT_ID() as user_id", function (error, results, fields) {
          if (error) throw error
          const user_id = results[0]

          req.login(user_id, function (err) {
            res.end()
          })
        })
      })
    })
  }
})


app.post('/app/login',
  passport.authenticate('local'),
  function (req, res) {
    console.log("finished auth")
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.end()
  });

app.get('/jobs/postings', function (req, res) {
  connection.query("SELECT * FROM job_postings", function (err, result) {
    if (err) throw err

    res.json(result)
  })
})

app.post('/jobs/post', function (req, res) {
  connection.query("INSERT INTO jobs", function (err, result) {
    if (err) throw err
    
    res.json(result)
  })
})

app.get('/api/user/applied', function (req, res) {
  if (req.isAuthenticated()) {
    // console.log(req.session.passport.user.user_id)
    connection.query("SELECT DISTINCT job FROM applied WHERE ?", {
      id: req.session.passport.user.user_id
    }, function (err, result) {
      if (err) throw err

      res.json(result)
    })
  } else {
    console.log("Not Logged In")
    res.end()
  }
})

app.post('/api/user/applied/:id', function (req, res) {
  if (req.isAuthenticated()) {
    console.log(req.session.passport.user.user_id)
    connection.query("INSERT INTO applied SET ?", {
      id: req.session.passport.user.user_id,
      job: req.params.id
    }, function (err, result) {
      if (err) throw err

      res.json(result.affectedRows)
    })
  }
  else {
    console.log("Not Logged In")
    res.end()
  }
})

app.get("/logout", function(req, res) {
  console.log("logged out")
  req.logout()
  req.session.destroy()
  req.redirect("/")
})

passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
  done(null, user_id);
});

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT)
})
