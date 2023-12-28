const express = require('express')
const {getAllProducts, createAProduct} = require('../controllers/productController')
const router = express.Router()


router.get('/', getAllProducts)
router.post('/', createAProduct)


module.exports = router