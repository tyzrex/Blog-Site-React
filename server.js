const express = require('express')
const app = express()
const cors = require('cors');
const cookieParser = require('cookie-parser');


const PORT = process.env.PORT || 5000

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//routes

app.use('/auth', require('./routes/auth'))

// server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})