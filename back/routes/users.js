const router = require('express').Router()
const usersControllers = require('../controllers/users')
const { authorizer } = require('../middlewares')
module.exports = (db) => {
    
    router.get('/',authorizer(), usersControllers.getUsers(db))
    router.get('/eventos',authorizer(),usersControllers.getEvento(db))
    return router
}