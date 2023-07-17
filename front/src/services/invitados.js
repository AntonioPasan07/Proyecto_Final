

export const useInvitados = (client)=> async (params) =>{
    try{
        const {data} = await client.put('/invitados/status', params)
        console.info('invitados >>>>',data)
        return data
     }catch(error){
        return {success: false}
     }

}