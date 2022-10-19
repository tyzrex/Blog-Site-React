const express = require('express')
const app = express()
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const multer = require('multer');


const PORT = process.env.PORT || 5000

const upload = multer({dest: './uploads/'})

app.post('/upload', upload.single('file'), function (req, res) {
    res.status(200).json("Image has been uploaded");
    console.log(req.file,req.body)
  })

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(express.static(path.join(__dirname ,"client/build")));

//routes

app.use('/auth', require('./routes/auth'))
app.use('/posts', require('./routes/posts'))

// server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})