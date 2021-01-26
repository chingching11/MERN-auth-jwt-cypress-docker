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

let dbHost = process.env.DATABASE_HOST || 'localhost'
mongoose.connect(
    `mongodb://${dbHost}:27017/users`, 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
  ).then(
    () => console.log('connected with mongodb') , 
    (err) => console.log(err)
  )

const authRoute = require('./routes/authenticate')
const registerRoute = require('./routes/register')
const privateRoute = require('./routes/private')
const verifyRoute = require('./routes/verifyToken')

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