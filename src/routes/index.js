const userRouter = require('../routes/userRouter')
const productRouter = require('../routes/productRouter')

const routes = (app) => {
    app.use('/api/user', userRouter)
    app.use('/api/product', productRouter)
}

module.exports = routes