

const router = require('express').Router()
const controllers = require('../controllers/invitaciones');
const {authorizer}= require('../middlewares')

module.exports = (db) => {
    router.post('/new', controllers.postInvitados(db))
    router.put('/status',authorizer, controllers.updateGuestStatus(db))

    return router

}