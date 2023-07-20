import { useQuery } from "react-query";
import { eventos } from "../services";

export const useEventInvitado = (secreto) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user-event", secreto], 
    queryFn: () => eventos.getEvent(secreto), 
  });

  return { data, isLoading };
};

