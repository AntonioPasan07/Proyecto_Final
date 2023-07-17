const error = require('../../misc/errors')
const {updateGuests}= require('../../models/invitaciones')

module.exports = (db)=> async (req, res, next) => {

    const {confirmacion, pagoBizum, estadoBizum, eventToken} = req.body

    const {email}= res.locals.user
    
    const result = await updateGuests(await db)(confirmacion, pagoBizum, estadoBizum, eventToken, email)
    console.log(result)
   if (!result.ok) {
        return next(error[401]);
      }

    res.status(200).json({
        success : true,
        data: result.response,
    })
}