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

const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        // const {name, email, password, confirmPassword, phone} = userLogin
        try {
            const checkProduct = await Product.findOne({
                _id: id  
            })
            console.log('checkProduct', checkProduct)
            if(checkProduct === null) {
                resolve({
                    status: 'OK',
                    message: 'The product is not defined!'
                })
            } 

            const updateProduct = await Product.findByIdAndUpdate(id, data, {new: true})
            console.log('updateProduct', updateProduct)

            resolve({ 
                status: 'OK',
                message: 'SUCCESS',
                data:  updateProduct
            })

        } catch(e) {
            reject(e)
        }
    })
}

module.exports = {createProduct, updateProduct}