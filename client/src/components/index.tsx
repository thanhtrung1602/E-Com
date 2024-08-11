import toast from "react-hot-toast";
import useGet from "~/api/get";
import usePost from "~/api/post";

function Test() {
    const {mutate: login} = usePost();

    const data = {}
    login({url: "/auth/login", data}, {
        onSuccess: (data) => {
            if(data.status === 200) {
                toast.success("Đăng ký thành công")
            }
        }
    })

    return (  );
}

export default Test;