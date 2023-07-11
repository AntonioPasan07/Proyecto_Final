

export const register =(client)=> async (params)=>{
    try{
       const {data} = await client.post('/auth/register', params)
       console.info(data)
       return data
    }catch{error}{
       return {success: false}
    }
   }
   
   export const login = (client) => async (params) => {
       try{
        const {data} = await client.post('/auth/login', params)
      console.info(data)
       return data
       }catch{error}{
       return {success: false}
       }
   }

   export const logout = (client) => async (params) => {
    try{
     const {data} = await client.post('/auth/signout', params)
     console.info(data)
     return {success: true}
    }catch{error}{
        return {success: false}
    }
}