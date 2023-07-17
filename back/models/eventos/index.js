const {insertEvento, getEventoCreate, getEventos} = require('./queries')
const {generateToken}= require('../../utils/token')


const creatEvento = (db)=> async (evento, fechaEvento,hora,telefono, direccion, descripcion, email)=>{
   console.log(evento, fechaEvento,hora,telefono, direccion, descripcion, email)
    
    try{
        
        const codigoSecreto = generateToken(8)

     await db.query(insertEvento(evento, fechaEvento,hora,telefono, direccion, descripcion,codigoSecreto, email))
    
    const response = await db.query(getEventoCreate(email))
     
    
      return {
        ok:true,
        response: response.rows, 
      }
      
    }catch(error){
        return{
            ok:false,
            message: error.message,
        }
    }
}

const eventoUsers = (db)=> async(id)=>{
    try{
  response =  await db.query(getEventos(id))
  return {
    ok: true,
    response: response.rows,
  }

    }catch(error){
        return {
            ok:false,
            message: error.message,
        }
    }

}


module.exports = {
    creatEvento,
    eventoUsers,
    
}