const error = require('../../misc/errors')
const {newInvitado}= require('../../models/invitaciones')

module.exports = (db)=> async (req, res, next) => {

    const {confirmacion, pagoBizum, estadoBizum} = req.body
    console.log(confirmacion, pagoBizum, estadoBizum)

    const result = await newInvitado(await db)(confirmacion, pagoBizum, estadoBizum)
 console.log(result)
   if (!result.ok) {
        return next(error[401]);
      }

    res.status(200).json({
        success : true,
        data: result.response,
    })
}