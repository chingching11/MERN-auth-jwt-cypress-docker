const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
      res.status(401).send('Access Denied')
    } else {
        jwt.verify(token, process.env.secret, (err, decoded) => {
            if (err) {
              res.status(401).send('Access Denied')
            } else {
              req.email = decoded.data
              // console.log(decoded.data)
              next();
            }
          });
        
    }

}
module.exports = authenticate