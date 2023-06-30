const router = require('express').Router()
const authControllers = require('../controllers/auth');

const {authorizer, fieldsValidator}= require('../middlewares')

const signupValidator = fieldsValidator('email', 'username', 'password')
const signinValidator = fieldsValidator('email', 'password')

module.exports = (db) => {
    router.post('/register', signupValidator,authControllers.signup(db))
    router.post('/login', signinValidator,authControllers.signin(db))
    router.post('/signout',authorizer, authControllers.signout())
    return router
}