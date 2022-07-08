

const dotenv = require("dotenv")
dotenv.config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");



const userRoutes = require('./server/routes/user')
const postRoutes = require('./server/routes/post')
app.use(express.json());
app.use(express.static(__dirname + "/client/build"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/client/build', 'index.html')))

mongoose.connect(process.env.dbURL)
    .then(console.log("DB Connected"))
    .catch(error => console.log(error))
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Content-Type")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.use('/user', userRoutes)
app.use('/post', postRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));