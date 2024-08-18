<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
=======
import { useQuery, UseQueryResult } from "@tanstack/react-query";
>>>>>>> 35ff99103815c6904dee799e16528bd253b8e9ce
import instance from "~/services/axios";

function useGet(url: string) {
  return useQuery({
    queryKey: [url],
    queryFn: () => instance.get(url).then((response) => response.data),
  });
}

export default useGet;
