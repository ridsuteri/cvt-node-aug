const getAllProducts = (req, res)=>{
    res.json({message:[]})
}


const createAProduct = (req, res)=>{
    res.json({message:"product created successfully"})
}

module.exports = {
    getAllProducts,
    createAProduct
}