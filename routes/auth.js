const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
require('dotenv').config();

// routes

// register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, img } = req.body;
    //check if user exists
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(409).json("User already exists");
    } else {
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
      console.log(bcryptPassword);
      const newUser = await pool.query(
        "INSERT INTO users (username, email,password,img,uid) VALUES ($1, $2, $3,$4,$5) RETURNING *",
        [name, email, bcryptPassword, img, uuid.v4()]
      );
      res.status(200).json("User registered");
    }
  } catch (err) {
    console.error(err.message);
  }
});

//route for login

router.post("/login",async(req,res)=>{
  try{
    const {name} = req.body;
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      name,
    ]);
    if(user.rows.length === 0){
      return res.status(401).json("User does not exist");
    }
    const validPassword = await bcrypt.compare(req.body.password,user.rows[0].password);
    if(!validPassword){
      return res.status(409).json("Incorrect username or password");
    }

    const token = jwt.sign({id:user.rows[0].id},process.env.JWT_SECRET);
    const {password, ...others} = user.rows[0];
    
    res.cookie("access_token",token,{
      httpOnly:true,
      sameSite:true
      }).status(200).json(others)
  }catch(err){
    console.error(err.message);
  }
})

//route for logout

router.post("/logout",async(req,res)=>{
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  });
  res.status(200).json("Logged out");
}
)

module.exports = router;
