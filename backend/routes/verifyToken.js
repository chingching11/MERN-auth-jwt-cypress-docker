const express = require("express")
const router = express.Router();
const auth = require("../authenticateToken")

router.get('/', auth, (req, res) => {
    console.log('valid token')
    res.status(200).send('valid Token');
})

module.exports = router;