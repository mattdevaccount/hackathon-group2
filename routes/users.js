const express = require('express');
const mysql = require("mysql");
const uuid = require('uuidv4')

const app = express();
const router = express.Router();

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123!',
    database: 'pets_db'
  });

// select all user
  router.get('/getusers', (req, res) => {
    let sql = "SELECT * FROM users";
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.send('All Users fetched!')
    });
  });

// select single user
  router.get('/getuser/:id', (req, res) => {
    let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {1
      if (err) throw err;
      console.log(result);
      res.send('Particular User fetched!')
    });
  });  

// insert test user
router.post('/addUser', (req, res) => {
    let pet = { name: 'Toonrot Humane Society', city: 'Toronto', description: 'Animal Shelter', id: uuid.uuid() };
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, pet, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('User 1 added')
    })
  });
  
  // update user info
  router.patch('/updateuser/:id', (req, res) => {
    let newName = 'Toronto Humane Society';
    let sql = `UPDATE users SET name = '${newName}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('User info Updated!')
    });
  });
  
  // remove user
  router.delete("/deleteuser/:id", (req, res) => {
    let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('User Removed from Database!')
    });
  });

  module.exports = router;