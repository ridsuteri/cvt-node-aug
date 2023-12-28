const User = require('../models/User');

const getAllUsers = (req, res)=>{
    let queries = req.query;
    // console.log(queries);
    User.find().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    });
}

const createAUser = (req, res)=>{
    // const {firstName, lastName, uidaiNo}=req.body
    console.log(req.body);
    const newUser = new User(req.body);
    
    newUser.save().then(()=>{
        res.json({message:"user created successfully"})
    }).catch((err)=>{
        res.json({message:'error saving the data'})
    })
}

const updateAUser = (req, res)=>{

}

module.exports = {
    getAllUsers,
    createAUser
}