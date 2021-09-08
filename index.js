const express = require("express");
const mysql = require("mysql");

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

const app = express();

// running after server starts
app.listen("3000", () => {
  console.log("Server started on port 3000!");
});

// creating database with mysql 
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE pets_db';
    db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send("Database created!");
    });
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

// insert pet 1
app.get('/addPet1', (req, res) => {
  let pet = { name: 'Mittens', city: 'Toronto', description: 'black shorthair' };
  let sql = 'INSERT INTO pets SET ?';
  let query = db.query(sql, pet, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Pet 1 added')
  })
})

// select all pets
app.get('/getpets', (req, res) => {
  let sql = "SELECT * FROM pets";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send('Pets fetched!')
  });
});

// select single pet
app.get('/getpet/:id', (req, res) => {
  let sql = `SELECT * FROM pets WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Pet fetched!')
  });
});

// update pet info
app.get('/updatepet/:id', (req, res) => {
  let newName = 'Cookie';
  let sql = `UPDATE pets SET name = '${newName}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Pet info Updated!')
  });
});

// delete post
app.get("/deletepet/:id", (req, res) => {
  let sql = `DELETE FROM pets WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Pet Removed from Database!')
  });
});
