import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocation } from "wouter";
import { getQuery } from "../utils";

export const useLogin = (redirectPath = "/dashboard") => {
  const [, setLocation] = useLocation();
  const { data, isLoading } = useUser();
  const origin = getQuery();

  useEffect(() => {
    if (data?.success) {
      origin ? setLocation(origin) : setLocation(redirectPath);
    }
  }, [data, setLocation, redirectPath]);

  return isLoading;
};
