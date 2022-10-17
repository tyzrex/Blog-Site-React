const express = require('express')
const router = express.Router()
const pool = require("../db");
const jwt = require("jsonwebtoken");

//get posts 
router.get('/',async(req,res)=>{
    try{
        const getPosts = await pool.query("SELECT * FROM posts")
        res.status(200).json(getPosts.rows)
    }
    catch(err){
        console.error(err.message)
    }
})

//publish post 

router.post('/',async(req,res)=>{
    try{
        const {title,description,img,uid} = req.body;
        const newPost = await pool.query("INSERT INTO posts (title,content,image,user_id) VALUES ($1,$2,$3,$4) RETURNING *",[title,description,img,uid])
        res.status(200).json(newPost.rows[0])
    }
    catch(err){
        console.error(err.message)
    }
})

//get post by id

// router.get('/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const post = await pool.query("SELECT * FROM posts WHERE id = $1",[id])
//         res.status(200).json(post.rows[0])
//     }
//     catch(err){
//         console.error(err.message)
//     }
// }
// )

router.get('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const post = await pool.query(" SELECT posts.id,posts.title,posts.content,posts.image,posts.user_id,users.username FROM posts INNER JOIN users ON posts.user_id = users.id WHERE posts.id = $1",[id])
        res.status(200).json(post.rows[0])
    }
    catch(err){
        console.error(err.message)
    }
})

//delete post 

router.delete('/:id',async(req,res)=>{
    try{
        const token = req.cookies.access_token;
        console.log(token)
        if(!token){
            return res.status(401).json("Unauthorized")
        }
        
        const {id} = req.params;
        const post = await pool.query("SELECT * FROM posts WHERE id = $1",[id])
        if(post.rows.length === 0){
            return res.status(404).json("Post not found")
        }
        const user = await pool.query("SELECT * FROM users WHERE id = $1",[post.rows[0].user_id])
        const validToken = jwt.verify(token,process.env.JWT_SECRET);
        if(validToken.id !== user.rows[0].id){
            return res.status(401).json("Unauthorized")
        }
        const deletePost = await pool.query("DELETE FROM posts WHERE id = $1",[id])
        res.status(200).json("Post deleted")

    }
    catch(err){
        console.error(err.message)
    }
})

module.exports = router