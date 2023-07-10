const {deserialize}= require('simple-stateless-auth-library')
const error = require('../misc/errors')
module.exports =(strict = true) => (req, res, next) => {
    const payload = deserialize(req)

 if(strict && !payload) return next(error[401])

 res.locals.user = payload || {}
 console.log(res.locals)
    next()
}