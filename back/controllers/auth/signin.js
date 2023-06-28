const error = require('../../misc/errors')
const {selectUsers} = require('../../models/auth')
const {hash, serialize} = require('simple-stateless-auth-library')
module.exports = (db) => async(req, res, next)=>{
    console.log(req)
    const {username,email, password}= req.body

    if(!username|| !email || !password) return next(error[400])

    const result = await selectUsers(await db)(email, hash.compare(password))
    
    if(!result.ok) return next(error[result.error_code || 500])

    
    serialize(res, result.content)//A qui metemos el contenido dentro de res esta la funcion cookie

    res.status(200).json({
        success:true,
    })
}