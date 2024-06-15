const Product = require('../models/productModel')

const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const {name, image, type, countInStock, price, rating, description} = newProduct
        try {
            const checkProduct = await Product.findOne({
                name: name
            })
            if(checkProduct !== null) {
                resolve({
                    status: 'OK',
                    message: 'The name of product is already'
                })
            }

            const newProduct = await Product.create({
                name, image, type, countInStock, price, rating, description
            })
            if(newProduct) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newProduct
                })
            }
        } catch(e) {
            reject(e)
        }
    })
}

module.exports = {createProduct}