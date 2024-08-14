import { useMutation } from "@tanstack/react-query";
import instance from "~/services/axios";

function usePost() {
  return useMutation({
    mutationFn: ({ url, data }: { url: string; data: object }) =>
      instance.post(url, data).then((response) => {
        console.log(response);
        return response;
      }
      ),
  });
}

export default usePost;
