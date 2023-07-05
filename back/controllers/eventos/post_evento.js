const { creatEvento } = require("../../models/eventos")
const error = require('../../misc/errors')


module.exports = (db) => async (req, res, next)=> {
 const {evento, fechaEvento,hora,telefono, direccion, descripcion} =req.body  
const {email}= res.locals
    
    const result = await creatEvento(await db)(evento, fechaEvento,hora,telefono, direccion, descripcion, email)
   

    if(!result.ok)return next(error[400])

    res.status(200).json({
        success: true,
        data: result.response,
       
    })
 
}