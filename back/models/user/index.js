const { usersEvent } = require('./queries')




const mostrarEvento = (db)=> async(user)=> {
    
    try{ 
         const response = await db.query(usersEvent(user))
      console.log(response)
        return {
            ok: true,
            username: user.username,
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
    mostrarEvento,
}