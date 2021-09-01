const express = require("express");
const mysql = require("mysql");

const app = express();

// running after server starts
app.listen("3000", () => {
  console.log("Server started on port 3000!");
});

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  // database : 'hackathon_db'
});

// connecting to the db
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected!");
});

// creating database with mysql npm
// app.get('/createdatabase', (req, res) => {
//   let sql = 'CREATE DATABASE hackathon_db';
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Database created!");
//   });
// });
