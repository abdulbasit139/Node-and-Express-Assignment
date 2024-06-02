const express = require('express')
const {
    getProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
} = require('../Controllers/productController')

const router = express.Router()

router.route('/').get(getProducts).post(createProduct)

router.route('/:id').get(getSingleProduct).put(updateProduct).delete(deleteProduct)

module.exports = router