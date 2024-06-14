const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
// const { authMiddleWare } = require('../middleware/authMiddleware')

router.post('/sign-up', userController.createUser)
router.post('/log-in', userController.loginUser)
router.put('/update-user/:id', userController.updateUser)
// router.delete('/delete-user/:id', authMiddleWare, userController.deleteUser)

module.exports = router