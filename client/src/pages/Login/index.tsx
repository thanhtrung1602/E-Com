import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import usePost from "~/api/post";
import loginImage from "~/assets/loginImage.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login } = usePost();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    login(
      { url: "/auth/login", data },
      {
        onSuccess: (data) => {
          if (data) {
            toast.success("Đăng ký thành công");
          }
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="flex h-screen">
      <div className="">
        <img src={loginImage} alt="" className="h-full w-full" />
      </div>
      <div className="bg-white flex items-center justify-center py-28 px-20 w-1/2">
        <div className="w-[456px]">
          <h1 className="pb-6 text-black text-3xl font-bold">Sign up</h1>
          <p className="pb-8 text-black">
            Don’t have an accout yet?{" "}
            <span className="font-semibold text-main500">Sign Up</span>
          </p>
          <form onSubmit={handleLogin}>
            <div className="pb-8">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email address"
                className="bg-transparent text-black w-full outline-none border-b-2 pb-1"
              />
            </div>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="bg-transparent text-black w-full outline-none border-b-2 pb-1"
              />
              <FaEyeSlash className="absolute right-1 bottom-1 text-[#D1D4DB]" />
            </div>
            <div className="py-8 flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  name=""
                  id="checkBox"
                  className="size-5 text-white accent-main500"
                />
                <label htmlFor="checkBox" className="text-black">
                  Remember me
                </label>
              </div>
              <div className="">
                <Link to={"/forgotpass"} className="font-semibold text-black">
                  Forgot password
                </Link>
              </div>
            </div>
            <button type="submit" className="w-full py-2 bg-main500 rounded">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
