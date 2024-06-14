const userService = require('../services/userService')

const createUser = async (req, res) => {
    try {
        const {name, email, password, confirmPassword, phone} = req.body    
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)

        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email'
            })
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is equal confirmPassword'
            })
        }

        // console.log("isCheckEmail", isCheckEmail)

        const respone = await userService.createUser(req.body)
        return res.status(200).json(respone )

    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const {name, email, password, confirmPassword, phone} = req.body    
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)

        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email'
            })
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is equal confirmPassword'
            })
        }

        // console.log("isCheckEmail", isCheckEmail)

        const respone = await userService.loginUser(req.body)
        return res.status(200).json(respone )
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id
        const data = req.body
        if(!userId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The userId is required'
            })
        } 
        console.log('userId', userId)   
        const respone = await userService.updateUser(userId, data)
        return res.status(200).json(respone)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteUser = async (req, res) => {
    try {   
        const userId = req.params.id
        // const token = req.headers    
        if(!userId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The userId is required'
            })
        } 
        const respone = await userService.deleteUser(userId)
        return res.status(200).json(respone)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllUser = async (req, res) => {
    try {   
        const respone = await userService.getAllUser()
        return res.status(200).json(respone)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailUser = async (req, res) => {
    try {   
        const userId = req.params.id
        // const token = req.headers
        if(!userId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The userId is required'
            })
        } 
        const respone = await userService.getDetailUser(userId)
        return res.status(200).json(respone)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {createUser, loginUser, updateUser, deleteUser, getAllUser, getDetailUser}