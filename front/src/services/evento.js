

export const useEventoCreate = (client)=> async (params) =>{
    try{
        const {data} = await client.post('/evento', params)
        console.info('secreto_password >>>>',data)
        return data
     }catch(error){
        return {success: false}
     }

}

export const getEvent = (client)=> async (eventoId) =>{
    try{
      
        const {data} = await client.get(`/evento/${eventoId}`)
        console.info('dime que funciona >>>>',data)
        return  data
     }catch(error){
        return {success: false}
     }

}