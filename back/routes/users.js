const router = require('express').Router()
const usersControllers = require('../controllers/users')
const { authorizer } = require('../middlewares')
module.exports = () => {
    router.get('/',authorizer, usersControllers.getUsers())
    return router
}