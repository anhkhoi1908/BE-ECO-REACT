// const jwt = require('jsonwebtoken')
// const dotenv = require(dotenv)
// dotenv.config()

// const authMiddleWare = (req, res) => {
//     console.log('checkToken', req.headers.token)
//     const token = req.headers.token.split(' ')[1]
//     jwt.verify(token, process.env.ACCESS_TOKEN, function(err, decoded) {
//         if (err) {
//             return res.status(404).json({
//                 message: 'The authentication',
//                 status: 'ERROR'
//             })
//         }
//         console.log('user', user)
//     });
// }

// module.exports = {authMiddleWare}