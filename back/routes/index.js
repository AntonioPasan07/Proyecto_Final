const router = require('express').Router()
const authRouter = require('./auth')
const usersRouter = require('./users')
module.exports = (db) => {
    router.use('/auth',authRouter(db))
    router.use('/users',usersRouter())
    return router
}