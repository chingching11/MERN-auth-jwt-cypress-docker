const express = require("express")
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')


router.post('/', async (req, res) => {
  const {email, password} = req.body
  try{
    await bcrypt.hash(password, saltRounds, (err, hash) => {
      const newUser =  new User({
        email: email,
        password: hash
      });
      newUser.save((err) =>{
        if (err) {
          console.log(err);
          res.status(500).send("Error registering, please try again.");
        } else {
           // Issue token
            const token = jwt.sign({data: email}, process.env.secret, {expiresIn: '1h'});
            res.status(200).cookie('token', token, { httpOnly: true }).send("token initialized")
        }
      })
    })
  } catch (err) {
      res.status(400).send(err)
  }
    
})
module.exports = router;