const express = require("express");
const mysql = require("mysql");

const pets = require('./routes/pets')
const uuid = require('uuidv4')

const app = express();

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

// running after server starts
app.listen("3000", () => {
  console.log("Server started on port 3000!");
});