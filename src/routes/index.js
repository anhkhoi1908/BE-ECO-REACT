const userRouter = require('../routes/userRouter')

const routes = (app) => {
    app.use('/api/user', userRouter)
}

module.exports = routes