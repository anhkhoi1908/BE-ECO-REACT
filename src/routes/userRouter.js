const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const {authMiddleWare} = require("d:/ecommerce-react-be/src/middleware/authMiddleWare")

router.post('/sign-up', userController.createUser)
router.post('/log-in', userController.loginUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id', userController.deleteUser)
router.get('/getAll', userController.getAllUser)
router.get('/get-details/:id', userController.getDetailUser)

module.exports = router