

export const useInvitados = (client)=> async (params) =>{
    try{
        const {data} = await client.put('/invitados/status', params)
        console.info('invitados >>>>',data)
        return data
     }catch(error){
        return {success: false}
     }

}

export const useLista = (client)=> async (eventoId) =>{
   console.log('useLista',eventoId)
   try{
      const {data} = await client.get(`/invitados/${eventoId}`)
       console.info('invitados >>>>',data)
       return data.username
    }catch(error){
       return {success: false}
    }

}