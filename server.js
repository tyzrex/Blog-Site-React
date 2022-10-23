const express = require('express')
const app = express()
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const multer = require('multer');


const PORT = process.env.PORT || 5000

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './client/public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.post('/upload', upload.single('file'), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
  })

app.use(cors());
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
app.use(express.static(path.join(__dirname, "client/build")));
//routes

app.use('/auth', require('./routes/auth'))
app.use('/posts', require('./routes/posts'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });

// server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})