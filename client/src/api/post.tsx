import { useMutation } from "@tanstack/react-query";
import custom from "~/services/axios";

function usePost() {
  const { instance } = custom;
  return useMutation({
    mutationFn: ({ url, data }: { url: string; data: object }) =>
      instance.post(url, data).then((response) => {
        console.log(response);
        return response;
      }),
  });
}

export default usePost;
