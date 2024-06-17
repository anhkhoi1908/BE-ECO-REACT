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

const getAllProduct = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => { 
        // console.log('sort', sort)
        try {
            const totalProduct = await Product.countDocuments()
            // console.log('filter', filter)
            if(filter) {
                // console.log('okok')

                // const objectFilter = {}
                // objectFilter[filter[0]] = filter[1]
                // console.log('objectSort', objectSort)
                const label = filter[0]
                // console.log('label', label)
                const allProductFilter = await Product.find({ [label]: {'$regex': filter[1]} }).limit(limit).skip(page * limit)
                resolve({ 
                    status: 'OK',
                    message: 'SUCCESS', 
                    data: allProductFilter,
                    total: totalProduct,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit)
                })    
            }

            if(sort) {
                // console.log('okok')

                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                // console.log('objectSort', objectSort)

                const allProductSort = await Product.find().limit(limit).skip(page * limit).sort(objectSort)
                resolve({ 
                    status: 'OK',
                    message: 'SUCCESS', 
                    data: allProductSort,
                    total: totalProduct,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit)
                }) 
            }
            const allProduct = await Product.find().limit(limit).skip(page * limit)
            resolve({ 
                status: 'OK',
                message: 'SUCCESS',
                data: allProduct,
                total: totalProduct,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalProduct / limit)
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