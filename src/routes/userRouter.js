const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const {authMiddleWare, authUserMiddleWare} = require("../middleware/authMiddleware")

router.post('/sign-up', userController.createUser)
router.post('/log-in', userController.loginUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id', userController.deleteUser)
router.get('/getAll', authMiddleWare, userController.getAllUser)
router.get('/get-details/:id', authUserMiddleWare, userController.getDetailUser)
router.post('/refresh-token', userController.refreshToken)

module.exports = router