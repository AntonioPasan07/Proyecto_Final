import { useQuery } from "react-query";
import { user } from "../services";


export const useUserEvent = () => {
    const { data, isLoading } = useQuery({
      queryKey: ["user"],
      queryFn: user.useEvent,
     
    });
    console.log("data:", data);
  console.log("isLoading:", isLoading);
    return { data, isLoading };
  };