const error = require('../../misc/errors');
const { eventoUsers } = require('../../models/eventos');


module.exports = (db) => async (req, res, next) => {
    const { id } = req.params;

    const result = await eventoUsers(await db)(id)


    if (!result.ok) return next(error[400])

    const evento = result.response[0]
   
    res.status(200).json({
        success: true,
        data: {
            evento: {
                evento: evento.evento,
                fecha_evento: evento.fecha_evento,
                hora: evento.hora,
                telefono: evento.telefono,
                direccion: evento.direccion,
                descripcion: evento.descripcion,
            }
        }

    })


}
