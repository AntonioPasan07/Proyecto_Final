
const router = require('express').Router()
const eventoControllers = require('../controllers/eventos')
const {authorizer} = require('../middlewares')

module.exports = (db) => {
    router.post('/',authorizer,eventoControllers.postEvento(db))
  //  router.get('/eventos/:id', eventoControllers(db))
    return router
}