const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

// routesq
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, img } = req.body;
    //check if user exists
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).json("User already exists");
    } else {
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          console.log(hash);
        }
      });
      console.log(bcryptPassword);
      const newUser = await pool.query(
        "INSERT INTO users (user_name, user_email, user_password,image,user_id) VALUES ($1, $2, $3,$4,$5) RETURNING *",
        [name, email, bcryptPassword, img, uuid.v4()]
      );
      res.json(newUser.rows[0]);
      res.json("User registered");
    }
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
