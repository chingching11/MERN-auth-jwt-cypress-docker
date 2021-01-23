const express = require("express")
const router = express.Router();
const auth = require("../authenticateToken")


router.get('/', auth, (req, res) => {
    console.log(req.email)
    let name = req.email.replace(/@[^@]+$/, '')
    let randomNum = Math.floor(Math.random() * 100)
    res.status(200).send(`Hello ${name}, your random number is ${randomNum}`)
})

module.exports = router