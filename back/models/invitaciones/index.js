const { insertInvitaciones, selectInvitaciones, selectUsuarios } = require("./queries")

const newInvitado = (db)=> async(confirmacion, pagoBizum, estadoBizum)=> {
    try{
         const response = await db.query(insertInvitaciones(confirmacion, pagoBizum, estadoBizum))
       
        return {
            ok: true,
            response: response.rows,
        }
    }catch(error){
        return {
            ok: false,
            message: error.message,
        }
    }

}
const updateGuests = (db)=> async(confirmacion, pagoBizum, estadoBizum, eventToken, email)=> {
    try{
          await db.query(insertInvitaciones(confirmacion, pagoBizum, estadoBizum, eventToken, email))
        
         const response = await db.query(selectInvitaciones(eventToken))
       console.log(response)
        return {
            ok: true,
            response:response.rows,
        
        }
    }catch(error){
        return {
            ok: false,
            message: error.message,
        }
    }

}
const getUruariosInvitados = (db)=> async(eventToken)=> {
    try{
         const response = await db.query(selectUsuarios(eventToken))
         console.log('resultt',response)
        return {
            ok: true,
            response: response.rows,
           
        }
    }catch(error){
        return {
            ok: false,
            message: error.message,
        }
    }

}

module.exports = {
    newInvitado,
    updateGuests,
    getUruariosInvitados,
}