const User = require('../models/User');

const getAllUsers = (req, res)=>{
    User.find({lastName:"User"}).then((result)=>{
        res.json({message:result})
    }).catch((err)=>{
        res.json({message:err})
    });
}

const createAUser = (req, res)=>{
    const {firstName, lastName, uidaiNo}=req.body
    console.log(req.body);
    const newUser = new User({
        firstName,
        lastName,
        uidaiNo
    });
    
    newUser.save().then(()=>{
        res.json({message:"user created successfully"})
    }).catch((err)=>{
        res.json({message:'error saving the data'})
    })
}

module.exports = {
    getAllUsers,
    createAUser
}