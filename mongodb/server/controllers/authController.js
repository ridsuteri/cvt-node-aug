const User = require('../models/User');
const jwt = require('jsonwebtoken');
const login = (req, res)=>{
    let {firstName, uidaiNo} = req.body;
    User.find({firstName, uidaiNo}).then((result)=>{
        // TODO: generate a token for this payload and send it to the user
        const token = jwt.sign({firstName},process.env.JWT_SECRET,{expiresIn:'2h'});
        res.json({"token":token});
    }).catch(()=>{
       res.json({"message":'error fetching user'});
    })
}

module.exports = {login}