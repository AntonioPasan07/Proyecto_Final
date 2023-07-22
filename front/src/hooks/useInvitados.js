import { useMutation, useQueryClient } from "react-query"
//import { useLocation } from "wouter"
import {invitados}from '../services'
import {useState} from 'react'

export const useInvitacion = (reset) => {
    const queryClient = useQueryClient();
    const [nombresInvitados, setNombresInvitados] = useState([]);
    console.log('useInvitacion state empty',nombresInvitados)
   //const [, setLocation] = useLocation();
    
    const { mutate: invitacion } = useMutation({
        mutationFn: invitados.useInvitados,
        onSuccess: (result) => {
          console.log('useInvitacion result',result)
          if (result.success) {
            const nombres = result?.data?.map((invitado) => invitado.username);
            console.log('useInvitacion result normalized:', nombres);
            setNombresInvitados(nombres);
            queryClient.invalidateQueries({ queryKey: ["user"] });
          // setLocation('/lista');
           reset()
        
        
          }
        },
      });
      
  
   return {invitacion, nombresInvitados}

} 
