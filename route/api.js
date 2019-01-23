const express = require('express')
const router = express.Router()

function apiRoutes (connection) {
    router.get('/api/user/applied', function (req, res) {
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
      
      router.post('/api/user/applied/:id', function (req, res) {
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

      return router
}


module.exports = apiRoutes
