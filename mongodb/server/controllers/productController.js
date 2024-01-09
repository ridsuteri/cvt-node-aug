const Product = require('../models/Product');

const getAllProducts = (req, res)=>{
    Product.find().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    });
}


const createAProduct = (req, res)=>{
    const newProduct = new Product(req.body);
    console.log(newProduct);
    newProduct.save().then(()=>{
        res.json({message:"Product created successfully"})
    }).catch((err)=>{
        res.json({message:'error saving the data'})
    })
}

module.exports = {
    getAllProducts,
    createAProduct
}