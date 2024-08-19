/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import instance from "~/services/axios";

function useGet(url: string) {
  return useQuery({
    queryKey: [url],
    queryFn: () => instance.get(url).then((response) => response.data),
  });
}

export default useGet;
