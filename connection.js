var mysql = require("mysql");
var express = require("express");
require("dotenv").config();
var app = express();
var PORT = process.env.PORT || 8080;

var connection;

if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connect = mysql.createConnection({
    host: process.env.db_host,
  
    // Your port; if not 3306
    port: process.env.db_port,
  
    // Your username
    user:  process.env.db_user,
  
    // Your password
    password:  process.env.db_password,
    database: "cannahire"
  });
};
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId)
    // notSureWhatToCallIt(); need to build function for creating new users
  });

  app.listen(PORT, function(){
    console.log("app listening on port: " + PORT)
  })