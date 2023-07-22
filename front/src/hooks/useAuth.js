import { useMutation, useQueryClient } from "react-query";
import { useLocation, useRoute } from "wouter";
import { auth } from "../services";
import { getCurrentUrl } from "../utils";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const { mutate: register } = useMutation({
    mutationFn: auth.register,
    onSuccess: (result) => {
      if (result.success) {
        setLocation(getCurrentUrl("/login"));
      }
    },
  });

  const { mutate: login } = useMutation({
    mutationFn: auth.login,
    onSuccess: (result) => {
      console.log(result);
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });

  const { mutate: logout } = useMutation({
    mutationFn: auth.logout,
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });

  return { register, login, logout };
};
