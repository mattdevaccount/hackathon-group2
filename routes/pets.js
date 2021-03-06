const express = require("express");
const mysql = require("mysql");
const uuid = require("uuidv4");

const app = express();
const router = express.Router();

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pets_db",
});

// select all pets
router.get("/getpets", (req, res) => {
  let sql = "SELECT * FROM pets";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    console.log(typeof req.params.id);
    res.send(results);
  });
});

// select single pet
router.get("/getpets/:id", (req, res) => {
  let sql = `SELECT * FROM pets WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Pet fetched!");
  });
});

// insert pet 1 test
router.post("/addPet1", (req, res) => {
  let pet = {
    name: "Superdude",
    breed: "maine coon",
    age: '2',
    hair:'long',
    colour: 'red and white',
    city: "Toronto",
    description: "My foster parents say that I am a little purr machine. As soon as you walk in the room I starts to purr. I will come to you for cuddle time and will sit on your lap for attention. I am not good with dogs. I love other cats. I am good with kids.",
    health: "Neuteured and up to date with FVRCP and rabies vaccinations. No medications needed. I am not a special needs pet.",
    pet_uuid: uuid.uuid()
  };
  let sql = "INSERT INTO pets SET ?";
  let query = db.query(sql, pet, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(`${pet.name} added`);
  });
});

// insert pet 2 test
router.post("/addPet2", (req, res) => {
  let pet = {
    name: "Snowball II",
    city: "Toronto",
    description: "black longhair",
    colour: 'black',
    pet_uuid: uuid.uuid()
  };
  let sql = "INSERT INTO pets SET ?";
  let query = db.query(sql, pet, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(`${pet.name} added`);
  });
});

// update pet info
router.patch("/updatepet/:id", (req, res) => {
  let newName = "Cookie";
  let sql = `UPDATE pets SET name = '${newName}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Pet info Updated!");
  });
});

// remove pet
router.delete("/deletepet/:id", (req, res) => {
  let sql = `DELETE FROM pets WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    console.log(req.params.id)
    console.log(result);
    res.send("Pet Removed from Database!");
    if (err) throw err;
  });
});

module.exports = router;