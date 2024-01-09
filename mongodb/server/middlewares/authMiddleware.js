const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next)=>{
    // if req posseses a token
    const token = req.headers['authorization'];
    console.log(token);
    if(token){
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        if(decoded)
            next();
        else
            res.json({"message":"invalid token"})
    }
    // else (there is no token )
    else
        res.json({"message":"protected routes!!, requires a valid token"})
}

module.exports = {verifyToken}