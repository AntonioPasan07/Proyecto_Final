

import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocation } from "wouter";

export const useLogin = (redirectPath = '/dashboard') => {
  const [, setLocation] = useLocation();
  const { data, isLoading } = useUser();

  useEffect(() => {
    if (data?.success) setLocation(redirectPath);
  }, [data, setLocation, redirectPath]);

  return isLoading;
};