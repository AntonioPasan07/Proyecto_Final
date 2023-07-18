import { useQuery } from "react-query";
import { eventos } from "../services";

export const useEventInvitado = (secreto) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user", secreto], 
    queryFn: () => eventos.getEvent(secreto), 
  });

  return { data, isLoading };
};

