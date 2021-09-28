const express = require("express");
const mysql = require("mysql");
const uuid = require("uuidv4");

const app = express();
const router = express.Router();

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123!",
  database: "pets_db",
});

// select all user
router.get("/getusers", (req, res) => {
  let sql = "SELECT * FROM users";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

// select single user
router.get("/getuser/:id", (req, res) => {
  let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    1;
    if (err) throw err;
    console.log(result);
    res.send("Particular User fetched!");
  });
});

// insert test user
<<<<<<< HEAD
router.post('/addUser', (req, res) => {
    let pet = { name: 'Toronto Humane Society', city: 'Toronto', description: 'Animal Shelter', id: uuid.uuid() };
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, pet, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('User 1 added')
    })
=======
router.post("/adduser", (req, res) => {
  let user = {
    name: "Toronto Humane Society",
    city: "Toronto",
    description: "Animal Shelter",
    user_uuid: uuid.uuid()
  };
  let sql = "INSERT INTO users SET ?";
  let query = db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(`${user.name} added`);
>>>>>>> main
  });
});

// update user info
router.patch("/updateuser/:id", (req, res) => {
  let newName = "Toronto Humane Society II";
  let sql = `UPDATE users SET name = '${newName}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("User info Updated!");
  });
});

// remove user
router.delete("/deleteuser/:id", (req, res) => {
  let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User Removed from Database!');
  });
});

<<<<<<< HEAD
  router.post("/authuser", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    let sql = `select * from users where email = ${req.body.email}`

  })

  module.exports = router;
=======
module.exports = router;
>>>>>>> main
