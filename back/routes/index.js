const router = require('express').Router()
const authRouter = require('./auth')
const usersRouter = require('./users')
const eventoRouter = require('./eventos')
module.exports = (db) => {
    router.use('/auth',authRouter(db))
    router.use('/users',usersRouter())
    router.use('/evento',eventoRouter(db))
    return router
}