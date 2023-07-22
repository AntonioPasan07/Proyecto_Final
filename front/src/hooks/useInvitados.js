import { useMutation, useQueryClient } from "react-query";
import { useLocation } from "wouter";
import { invitados } from "../services";

const useInvitacion = (eventToken) => {
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const { mutate: invitacion } = useMutation({
    mutationFn: invitados.updateInvitados,
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
        setLocation(`/lista/${eventToken}`);
      }
    },
  });

  return { invitacion };
};

export default useInvitacion;
