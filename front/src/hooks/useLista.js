import { useQuery } from "react-query";
import {invitados } from "../services";

export const useListaUser = (secreto) => {
    console.log('useLista Secreto', secreto)
  const { data, isLoading } = useQuery({
    queryKey: [ "user-event",secreto], 
    queryFn: () => invitados.useLista(secreto), 
  });

  return { data, isLoading };
};
