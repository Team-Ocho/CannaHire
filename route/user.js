const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
const { validationResult } = require("express-validator/check")
const router = express.Router()

function userRoutes (connection) {

    router.post("/register", function (req, res) {
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
      
      
      router.post('/app/login',
        passport.authenticate('local'),
        function (req, res) {
          console.log("did something")
          // If this function gets called, authentication was successful.
          // `req.user` contains the authenticated user.
          res.end()
        });
      
      router.get("/logout", function(req, res) {
        console.log("logged out")
        req.logout()
        req.session.destroy()
        // req.redirect("/")
      })

      return router
}

module.exports = userRoutes
