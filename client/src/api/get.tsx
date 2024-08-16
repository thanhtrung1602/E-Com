import { useQuery } from "@tanstack/react-query";
import custom from "~/services/axios";

function useGet(url: string) {
  const { instance } = custom;
  return useQuery({
    queryKey: [url],
    queryFn: () => instance.get(url).then((response) => response.data),
  });
}

export default useGet;
