require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose")
const cors = require('cors')

const app = express()

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.connect(
    "mongodb://localhost:27017/users", 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

const authRoute = require('./routes/Authenticate')
const registerRoute = require('./routes/Register')
const privateRoute = require('./routes/Private')
const verifyRoute = require('./routes/VerifyToken')

app.use('/auth', authRoute)
app.use('/register', registerRoute)
app.use('/private', privateRoute)
app.use('/verify', verifyRoute)

app.get('/deleteCookie', (req, res) => {
	res.status(200).clearCookie('token').send("cookies cleared")
});

app.listen(8080, () => {
    console.log('backend listening on port 8080');
})