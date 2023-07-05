const router = require('express').Router()
const authRouter = require('./auth')
const usersRouter = require('./users')
const eventoRouter = require('./eventos')
const invitadosRouter = require ('./invitados')
module.exports = (db) => {
    router.use('/auth',authRouter(db))
    router.use('/users',usersRouter())
    router.use('/evento',eventoRouter(db))
    router.use('/invitados',invitadosRouter(db))
    return router
}