const express = require("express");
const mysql = require("mysql");

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

// connecting to the db
db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log("MySQL Connected!");
});

const app = express();

// creating database with mysql 
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE petsmysql';
    db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send("Database created!");
    });
  });

// running after server starts
app.listen("3306", () => {
  console.log("Server started on port 3306!");
});
