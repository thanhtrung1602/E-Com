/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import usePost from "~/api/post";
import registerImage from "~/assets/images/registerImage.png";

function Register() {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { mutate: register } = usePost();

    const handleRegister = () => {
        const data = {
            phone,
            name,
            email,
            password
        }

        register({ url: "/auth/register", data }, {
            onSuccess: (data) => {
                if (data.status === 200) {
                    toast.success("Đăng ký thành công")
                }
            }
        })
    }

    return (
        <div className="flex h-screen">
            <div className="">
                <img src={registerImage} alt="" className="h-full w-full" />
            </div>
            <div className="bg-white flex items-center justify-center py-28 px-20 w-1/2">
                <div className="w-[456px]">
                    <h1 className="pb-6 text-black text-3xl font-bold">Sign up</h1>
                    <p className="pb-8 text-black">Already have an account? <Link to={"/login"} className="font-semibold text-main500">Sign In</Link></p>
                    <form onSubmit={handleRegister}>
                        <div className="pb-8">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Your name"
                                className="bg-transparent text-black w-full outline-none border-b-2 pb-1" />
                        </div>
                        <div className="pb-8">
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                placeholder="Phone"
                                className="bg-transparent text-black w-full outline-none border-b-2 pb-1" />
                        </div>
                        <div className="pb-8">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent text-black w-full outline-none border-b-2 pb-1" />
                        </div>
                        <div className="relative">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="bg-transparent text-black w-full outline-none border-b-2 pb-1" />
                            {showPassword ? (
                                <FaEye
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-1 bottom-1 text-[#D1D4DB] cursor-pointer select-none" />
                            ) :
                                <FaEyeSlash
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-1 bottom-1 text-[#D1D4DB] cursor-pointer  select-none" />
                            }
                        </div>
                        <div className="py-8">
                            <div className="flex items-center gap-x-2">
                                <input type="checkbox" name="" id="checkBox" className="size-5 text-white accent-main500" />
                                <label htmlFor="checkBox" className="text-black">
                                    I agree with
                                    <span className="font-semibold text-main500"> Privacy Policy </span>
                                    and
                                    <span className="font-semibold text-main500"> Terms of Use </span>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-main500 rounded">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
