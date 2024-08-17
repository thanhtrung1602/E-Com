/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import imageNav1 from "~/assets/images/imageNav1.png";
import imageNav2 from "~/assets/images/imageNav2.png";
import imageNav3 from "~/assets/images/imageNav3.png";
import imageNav4 from "~/assets/images/imageNav4.png";
import imageNav5 from "~/assets/images/imageNav5.png";
import imageNav6 from "~/assets/images/imageNav6.png";


function Nav() {

    return (
        <div className="flex justify-between px-[135px] pt-10">
            <Link to={"/"}>
                <div className="bg-[#F4F4F6] flex justify-center items-center gap-x-4 px-4 py-1 rounded">
                    <span className="font-semibold">Điện thoại</span>
                    <img src={imageNav1} alt="" />
                </div>
            </Link>
            <Link to={"/"}>
                <div className="bg-[#F4F4F6] flex justify-center items-center gap-x-4 px-4 py-1 rounded">
                    <span className="font-semibold">Laptop</span>
                    <img src={imageNav2} alt="" />
                </div>
            </Link>
            <Link to={"/"}>
                <div className="bg-[#F4F4F6] flex justify-center items-center gap-x-4 px-4 py-1 rounded">
                    <span className="font-semibold">Tablet</span>
                    <img src={imageNav3} alt="" />
                </div>
            </Link>
            <Link to={"/"}>
                <div className="bg-[#F4F4F6] flex justify-center items-center gap-x-4 px-4 py-1 rounded">
                    <span className="font-semibold">Phụ kiện</span>
                    <img src={imageNav4} alt="" />
                </div>
            </Link>
            <Link to={"/"}>
                <div className="bg-[#F4F4F6] flex justify-center items-center gap-x-4 px-4 py-1 rounded">
                    <span className="font-semibold">Watch</span>
                    <img src={imageNav5} alt="" />
                </div>
            </Link>
            <Link to={"/"}>
                <div className="bg-[#F4F4F6] flex justify-center items-center gap-x-4 px-4 py-1 rounded">
                    <span className="font-semibold">Màn hình</span>
                    <img src={imageNav6} alt="" />
                </div>
            </Link>
        </div>
    );
}

export default Nav;