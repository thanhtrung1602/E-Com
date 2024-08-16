import { FaSearch } from "react-icons/fa";
import { FaArrowRight, FaTicket } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";
function Header() {
    return (
        <header>
            <div className="bg-main600 flex justify-center items-center">
                <div className="flex justify-center items-center gap-x-3 py-2 text-white">
                    <FaTicket />
                    <span>30% off storewide — Limited time! </span>
                    <div className="flex items-center gap-x-2">
                        <Link to={"#"} className="underline">Shop Now</Link>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between px-36 py-[6px]">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="size-10" />
                    <h2 className="text-black text-2xl font-bold">Dream Team</h2>
                </div>
                <div className="">
                    <ul className="flex items-center gap-x-12">
                        <li className="text-black font-semibold relative before:absolute before:w-full before:h-[0.5px] before:bottom-0 before:bg-black"><Link to={"/"}>Home</Link></li>
                        <li className="text-black font-semibold"><Link to={"/shop"}>Shop</Link></li>
                        <li className="text-black font-semibold"><Link to={"/contact"}>Contact</Link></li>
                        <li className="text-black font-semibold"><Link to={"/blog"}>Blog</Link></li>
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-x-6">
                    <form className="relative">
                        <input type="search" name="" placeholder="What are you looking for?" className="bg-[#D1D4DB] text-black w-60 rounded px-3 py-[7px] border-none outline-none" />
                        <FaSearch className="absolute right-3 bottom-3 text-black" />
                    </form>
                    <div className="flex justify-center items-center gap-x-4">
                        <Link to={"#"} className="relative">
                            <MdOutlineShoppingCart className="text-black size-6" />
                            <span className="absolute -top-3 -right-3 bg-red-500 text-white py-[0.5px] px-2 rounded-full">1</span>
                        </Link>
                        <Link to={"#"}>
                            <MdPersonOutline className="text-black size-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;