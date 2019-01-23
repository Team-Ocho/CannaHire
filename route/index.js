const api = require('./api')
const jobs = require('./jobs')
const user = require('./user')
const express = require('express')
const path = require('path')
const router = express.Router()

function routes (connection) {
    router
        .use(api(connection))
        .use(jobs(connection))
        .use(user(connection))
        .use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")))

    return router
}

module.exports = routes
