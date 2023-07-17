import { useMutation, useQueryClient } from "react-query"
import { useLocation } from "wouter"
import {eventos}from '../services'
import {useState}from 'react'

export const createEvent = () => {
    const queryClient = useQueryClient();
    const [, setLocation] = useLocation();
    const [secreto, setsecreto]= useState('')

    const { mutate: evento } = useMutation({
        mutationFn: eventos.useEventoCreate,
        onSuccess: (result) => {
          console.log(result)
          if (result.success) {
            const secretoPassword = result.data?.[result.data.length - 1]?.secreto_password;
            setsecreto(secretoPassword)
            queryClient.invalidateQueries({ queryKey: ["user"] });
            setLocation('/createEvent');
          }
        },
      });
  
   return {evento,secreto}

} 