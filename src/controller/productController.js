const productService = require('../services/productService')

const createProduct = async (req, res) => {
    try {
        const {name, image, type, countInStock, price, rating, description} = req.body    
        // console.log('req.body', req.body)

        if (!name || !image || !type || !countInStock || !price || !rating) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        } 

        // console.log('respone', req.body)
        const respone = await productService.createProduct(req.body)
        return res.status(200).json(respone)

    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const data = req.body
        if(!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        } 
        console.log('productId', productId)   
        const respone = await productService.updateProduct(productId, data)
        return res.status(200).json(respone)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteProduct = async (req, res) => {
    try {   
        const productId = req.params.id
        // const token = req.headers    
        if(!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        } 
        const respone = await productService.deleteProduct(productId)
        return res.status(200).json(respone)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllProduct = async (req, res) => {
    try {   
        const respone = await productService.getAllProduct()
        return res.status(200).json(respone)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailProduct = async (req, res) => {
    try {   
        const productId = req.params.id
        // const token = req.headers
        if(!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        } 
        const respone = await productService.getDetailProduct(productId)
        return res.status(200).json(respone)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {createProduct, updateProduct, deleteProduct ,getDetailProduct, getAllProduct}