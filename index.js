const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const bodyParser = require('body-parser');

const pets = require('./routes/pets')
const users = require('./routes/users')
const uuid = require('uuidv4')

const app = express();

// using cors
app.use(cors());

// using routes to add pets
app.use('/', pets, users)

// create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
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
app.get("/createpetstable", (req, res) => {
  let sql =
    "CREATE TABLE pets(id int AUTO_INCREMENT, name VARCHAR(255), breed VARCHAR(255), age int, colour VARCHAR(255), hair VARCHAR(255), city VARCHAR(255), description VARCHAR(255), pet_uuid VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("pets table created!");
  });
});

// creating a users table
app.get("/createuserstable", (req, res) => {
  let sql =
    "CREATE TABLE users(id int AUTO_INCREMENT, name VARCHAR(255), city VARCHAR(255), password VARCHAR(255), messages VARCHAR(255), user_uuid VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("users table created!");
  });
});

// running after server starts
app.listen("4000", () => {
  console.log("Server started on port 4000!");
});