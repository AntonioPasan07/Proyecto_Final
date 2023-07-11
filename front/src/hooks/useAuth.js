
import { useMutation, useQueryClient } from "react-query";
import { useLocation } from "wouter";
import {auth} from "../services";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const { mutate: register } = useMutation({
    mutationFn: auth.register,
    onSuccess: (result) => {
      console.info('>mutation result:', result)
      if (result.success) {
        setLocation('/login');
      }
    },
  });

  const { mutate: login } = useMutation({
    mutationFn: auth.login,
    onSuccess: (result) => {
      console.log(result)
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
        setLocation('/dashboard');
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