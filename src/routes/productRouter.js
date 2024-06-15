const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router.post('/create', productController.createProduct)
router.put('/update/:id', productController.updateProduct)

module.exports = router