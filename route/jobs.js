const express = require('express')
const router = express.Router()

function jobRoutes (connection) {
    router.get('/jobs/postings', function (req, res) {
        connection.query("SELECT * FROM job_postings", function (err, result) {
          if (err) throw err
      
          res.json(result)
        })
      })
      
      router.post('/jobs/post', function (req, res) {
        connection.query("INSERT INTO jobs", function (err, result) {
          if (err) throw err
          
          res.json(result)
        })
      })
      return router
}

module.exports = jobRoutes
