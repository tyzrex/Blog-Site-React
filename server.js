const express = require('express')
const app = express()
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const PORT = process.env.PORT || 5000

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