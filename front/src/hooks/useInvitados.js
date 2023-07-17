import { useMutation, useQueryClient } from "react-query"
import { useLocation } from "wouter"
import {invitados}from '../services'


export const useInvitacion = () => {
    const queryClient = useQueryClient();
    const [, setLocation] = useLocation();
    
    const { mutate: invitacion } = useMutation({
        mutationFn: invitados.useInvitados,
        onSuccess: (result) => {
          console.log(result)
          if (result.success) {
            queryClient.invalidateQueries({ queryKey: ["user"] });
            setLocation('/detalles');
          }
        },
      });
  
   return {invitacion}

} 