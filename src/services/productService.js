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
                    message: 'THE NAME OF PRODUCT IS ALREADY!'
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
        // const {name, email, password, confirmPassword, phone} = ProductLogin
        try {
            const checkProduct = await Product.findOne({
                _id: id  
            })
            console.log('checkProduct', checkProduct)
            if(checkProduct === null) {
                resolve({
                    status: 'OK',
                    message: 'THE PRODUCT IS NOT DEFINED!'
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

const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id  
            })

            if(checkProduct === null) {
                resolve({
                    status: 'OK',
                    message: 'THE PRODUCT IS NOT DEFINED!'
                })
            }

            await Product.findByIdAndDelete(id)

            resolve({ 
                status: 'OK',
                message: 'DELETE PRODUCT SUCCESS'
            })

        } catch(e) {
            reject(e)
        }
    })
}

const getAllProduct = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allProduct = await Product.find()
            resolve({ 
                status: 'OK',
                message: 'SUCCESS',
                data: allProduct
            })

        } catch(e) {
            reject(e)
        }
    })
}

const getDetailProduct = (id) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const product = await Product.findOne({
                _id: id  
            })

            if(product === null) {
                resolve({
                    status: 'OK',
                    message: 'THE PRODUCT IS NOT DEFINED!'
                })
            }

            resolve({ 
                status: 'OK',
                message: 'SUCCESS',
                data: product
            })

        } catch(e) {
            reject(e)
        }
    })
}

module.exports = {createProduct, updateProduct, deleteProduct, getDetailProduct, getAllProduct}