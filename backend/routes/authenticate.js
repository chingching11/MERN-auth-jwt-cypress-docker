const express = require("express")
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal error please try again')
    } else {
        if(user){
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              res.status(500).send('Internal error please try again')
            } else {
                // Issue token
                const token = jwt.sign({data: email}, process.env.secret, { expiresIn: '1hr' });
                res.status(200).cookie('token', token, { httpOnly: true }).send("token initialized")
            }
          })
        }
    }
  })
})

module.exports = router;