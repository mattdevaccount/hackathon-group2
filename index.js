const express = require("express");
const mysql = require("mysql");

const pets = require('./routes/pets')
const users = require('./routes/users')
const uuid = require('uuidv4')

const app = express();

// using routes to add pets
app.use('/', pets)

// create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123!',
  database: 'pets_db'
});

// connecting to the db
db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log("MySQL Connected!");
});

// creating pets table
app.get("/createpetstable", () => {
  let sql =
    "CREATE TABLE pets(id int AUTO_INCREMENT, name VARCHAR(255), city VARCHAR(255), description VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("pets table created!");
  });
});

// creating a users table
app.get("/createuserstable", () => {
  let sql =
    "CREATE TABLE users(id int AUTO_INCREMENT, name VARCHAR(255), city VARCHAR(255), description VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("users table created!");
  });
});

// running after server starts
app.listen("3000", () => {
  console.log("Server started on port 3000!");
});