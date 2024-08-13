import { useMutation } from "@tanstack/react-query";
import instance from "~/services/axios";

function usePost() {
  return useMutation({
    mutationFn: ({ url, data }: { url: string; data: object }) =>
      instance
        .post(url, data, {
          headers: {
            Authorization: `Bearer `,
          },
        })
        .then((response) => response.data),
  });
}

export default usePost;
