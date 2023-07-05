

const router = require('express').Router()
const invitadosControllers = require('../controllers/invitaciones');

module.exports = () => {
    router.post('/new', invitadosControllers.postInvitados())

    return router

}