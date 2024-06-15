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

        console.log('respone', req.body)
        const respone = await productService.createProduct(req.body)
        return res.status(200).json(respone)

    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {createProduct}