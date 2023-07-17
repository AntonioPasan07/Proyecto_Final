

export const useEventoCreate = (client)=> async (params) =>{
    try{
        const {data} = await client.post('/evento', params)
        console.info('secreto_password >>>>',data)
        return data
     }catch(error){
        return {success: false}
     }

}