const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const {authMiddleWare} = require('../middleware/authMiddleware')

router.post('/create', productController.createProduct)
router.put('/update/:id', authMiddleWare ,productController.updateProduct)
router.delete('/delete/:id', productController.deleteProduct)
router.get('/get-details/:id', productController.getDetailProduct)
router.get('/getAll', productController.getAllProduct)

module.exports = router