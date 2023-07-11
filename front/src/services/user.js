export const Info = (client) => async()=> {
    try{
     const {data} = await client.get('/users')
     console.info('>data',data)
     return data
    }catch(error){
    return {
        success: false,
    }
    }
   }

   export const useEvent = (client) => async()=> {
    try{
     const {data} = await client.get('/users/eventos')
     console.info('>data',data)
     return data
    }catch(error){
    return {
        success: false,
    }
    }
   }