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
        connection.query("INSERT INTO job_postings SET ?", {
          job_title: "",
          level: "",
          state: "",
          city: "",
          job_description: "",
          employee_requirements: "",
          company_ID: ""
        }, function (err, result) {
          if (err) throw err
          
          res.json(result)
        })
      })
      return router
}

module.exports = jobRoutes
