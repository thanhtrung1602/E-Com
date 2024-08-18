import { useMutation } from "@tanstack/react-query";
import instance from "~/services/axios";

function usePost() {
  return useMutation({
    mutationFn: ({ url, data }: { url: string; data: object }) =>
      instance.post(url, data).then((response) => {
        console.log(response);
        return response;
<<<<<<< HEAD
      }
      ),
=======
      }),
>>>>>>> 35ff99103815c6904dee799e16528bd253b8e9ce
  });
}

export default usePost;
