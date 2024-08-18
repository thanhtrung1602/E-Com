import Banner from "~/layouts/components/Banner";
import Nav from "~/layouts/components/Nav";
import bannerSale from "~/assets/images/bannerSale.png"
import bannerProductPopular from "~/assets/images/bannerProductPopular.png"
import blog from "~/assets/images/blog.png"

import { FaArrowRight } from 'react-icons/fa';

import Countdown from "~/components/CountDown";
import SwiperItem from "~/components/Swiper";

interface Product {
    percent: string;
    img: string;
    name: string;
    price: string;
    promotion: string;
}

interface Blog {
    img: string;
    name: string;
}

const products: Product[] = [
    { percent: "0%", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-s23-fe.png", name: 'Samsung galaxy zflip5', price: '199.00', promotion: '199.00' },
    { percent: "0%", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-a35_8_.png", name: 'Samsung galaxy zflip5', price: '199.00', promotion: '199.00' },
    { percent: "0%", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s24-plus.png", name: 'Samsung galaxy zflip5', price: '199.00', promotion: '199.00' },
    { percent: "0%", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222_2.png", name: 'Samsung galaxy zflip5', price: '199.00', promotion: '199.00' },
    { percent: "0%", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-flip-6-xanh-duong-6_2.png", name: 'Samsung galaxy zflip5', price: '199.00', promotion: '199.00' },
    { percent: "0%", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/tecno-pova-6-neo-1.png", name: 'Samsung galaxy zflip5', price: '199.00', promotion: '199.00' },
    { percent: "0%", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png", name: 'Samsung galaxy zflip5', price: '199.00', promotion: '199.00' },
    { percent: "0%", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__1_8.png", name: 'Samsung galaxy zflip5', price: '199.00', promotion: '199.00' },
    { percent: "0%", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_2__5.png", name: 'Samsung galaxy zflip5', price: '199.00', promotion: '199.00' },
    { percent: "0%", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_509_9__1.png", name: 'Samsung galaxy zflip5', price: '199.00', promotion: '199.00' },
];

const blogs: Blog[] = [
    { img: blog, name: "iPhone 15 ra mắt bảng Pro Max" },
    { img: blog, name: "iPhone 15 ra mắt bảng Pro Max" },
    { img: blog, name: "iPhone 15 ra mắt bảng Pro Max" },
    { img: blog, name: "iPhone 15 ra mắt bảng Pro Max" },
    { img: blog, name: "iPhone 15 ra mắt bảng Pro Max" },
    { img: blog, name: "iPhone 15 ra mắt bảng Pro Max" },
    { img: blog, name: "iPhone 15 ra mắt bảng Pro Max" },
    { img: blog, name: "iPhone 15 ra mắt bảng Pro Max" },
    { img: blog, name: "iPhone 15 ra mắt bảng Pro Max" },
    { img: blog, name: "iPhone 15 ra mắt bảng Pro Max" },
];

function Home() {
<<<<<<< HEAD
    const saleEndDate = '2024-08-17T23:59:59';
    return (
        <>
            {/* Banner */}
            <Banner />
            {/* Menu */}
            <Nav />
            {/* Sản phẩm hoy */}
            <div className="px-[135px] py-10">
                <h2 className="text-3xl font-semibold pb-[30px]">Sản Phẩm Hot</h2>
                <div className="flex flex-col gap-y-5 w-full">
                    <div className="flex justify-between">
                        <SwiperItem<Product>
                            items={products}
                            className='relative group'
                            slidesPerView={5}
                            spaceBetween={20}
                            pagination={true}
                            navigation={true}
                        >
                            {(product) => (
                                <div className="relative p-5 rounded bg-[#F4F4F6] overflow-hidden select-none">
                                    <span className="absolute top-0 left-0 rounded-tr-full px-4 text-white py-1 rounded-br-full bg-[#FF0000]">Giảm {product.percent}</span>
                                    <div className="w-full mb-5 flex justify-center">
                                        <img
                                            src={product.img}
                                            alt=""
                                            className="w-full my-0 mx-auto"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-3 border-t border-black">
                                        <p className="font-medium text-base mt-1">{product.name}</p>
                                        <div className="flex flex-col gap-y-1">
                                            <span className="font-semibold text-xl text-[#FF0000]">${product.price}</span>
                                            <span className="font-normal text-sm text-[#6C7275] line-through">${product.promotion}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperItem>
                    </div>
                    <div className="flex justify-between">
                        <SwiperItem<Product>
                            items={products}
                            className='relative group'
                            slidesPerView={5}
                            spaceBetween={20}
                            pagination={true}
                            navigation={true}
                        >
                            {(product) => (
                                <div className="relative p-5 rounded bg-[#F4F4F6] overflow-hidden select-none">
                                    <span className="absolute top-0 left-0 rounded-tr-full px-4 text-white py-1 rounded-br-full bg-[#FF0000]">Giảm {product.percent}</span>
                                    <div className="w-full mb-5 flex justify-center">
                                        <img
                                            src={product.img}
                                            alt=""
                                            className="w-full my-0 mx-auto"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-3 border-t border-black">
                                        <p className="font-medium text-base mt-1">{product.name}</p>
                                        <div className="flex flex-col gap-y-1">
                                            <span className="font-semibold text-xl text-[#FF0000]">${product.price}</span>
                                            <span className="font-normal text-sm text-[#6C7275] line-through">${product.promotion}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperItem>
                    </div>
                </div>
            </div>
            {/* Sale giảm giá có hạn */}
            <div className="flex">
                <div className="w-1/2 select-none">
                    <img src={bannerSale} alt="" className="block w-full" />
                </div>
                <div className="w-1/2 pl-20 py-24">
                    <div className="flex flex-col gap-y-4 mb-6">
                        <span className="text-base font-bold">Limited Edition</span>
                        <h2 className="text-[#7D8184] text-4xl font-medium">Hurry up! 30% OFF</h2>
                        <span className="text-xl text-[#7D8184]">Find clubs that are right for your game</span>
                    </div>
                    <div className="flex flex-col gap-y-4 mb-6">
                        <span className="text-base font-normal">Offer expires in:</span>
                        <Countdown targetDate={saleEndDate} />
                    </div>
                    <button
                        type="button"
                        className="px-10 py-2 text-white bg-main500 rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            {/* Sản phẩm phổ biến */}
            <div className="px-[135px] py-10">
                <h2 className="text-3xl font-semibold pb-[30px]">Sản phẩm phổ biến</h2>
                <div className="flex items-center gap-x-5">
                    <div className="w-3/5">
                        <div className="flex flex-col gap-y-5 w-full">
                            <div className="flex justify-between">
                                <SwiperItem<Product>
                                    items={products}
                                    className='relative group'
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    pagination={true}
                                    navigation={true}
                                >
                                    {(product) => (
                                        <div className="relative p-5 rounded bg-[#F4F4F6] overflow-hidden select-none">
                                            <span className="absolute top-0 left-0 rounded-tr-full px-4 text-white py-1 rounded-br-full bg-[#FF0000]">Giảm {product.percent}</span>
                                            <div className="w-full mb-5 flex justify-center">
                                                <img
                                                    src={product.img}
                                                    alt=""
                                                    className="w-full my-0 mx-auto"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-y-3 border-t border-black">
                                                <p className="font-medium text-base mt-1">{product.name}</p>
                                                <div className="flex flex-col gap-y-1">
                                                    <span className="font-semibold text-xl text-[#FF0000]">${product.price}</span>
                                                    <span className="font-normal text-sm text-[#6C7275] line-through">${product.promotion}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </SwiperItem>
                            </div>
                            <div className="flex justify-between">
                                <SwiperItem<Product>
                                    items={products}
                                    className='relative group'
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    pagination={true}
                                    navigation={true}
                                >
                                    {(product) => (
                                        <div className="relative p-5 rounded bg-[#F4F4F6] overflow-hidden select-none">
                                            <span className="absolute top-0 left-0 rounded-tr-full px-4 text-white py-1 rounded-br-full bg-[#FF0000]">Giảm {product.percent}</span>
                                            <div className="w-full mb-5 flex justify-center">
                                                <img
                                                    src={product.img}
                                                    alt=""
                                                    className="w-full my-0 mx-auto"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-y-3 border-t border-black">
                                                <p className="font-medium text-base mt-1">{product.name}</p>
                                                <div className="flex flex-col gap-y-1">
                                                    <span className="font-semibold text-xl text-[#FF0000]">${product.price}</span>
                                                    <span className="font-normal text-sm text-[#6C7275] line-through">${product.promotion}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </SwiperItem>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 select-none">
                        <img src={bannerProductPopular} alt="" className="block w-full" />
                    </div>
                </div>
            </div>
            {/* Blog */}
            <div className="px-[135px] py-10">
                <h2 className="text-3xl font-semibold pb-[30px]">Blog</h2>
                <div className="flex flex-col gap-y-5 w-full">
                    <div className="">
                        <SwiperItem
                            items={blogs}
                            className='relative group'
                            slidesPerView={3}
                            spaceBetween={20}
                            navigation={false}
                            pagination={true}
                        >
                            {blog => (
                                <div className="relative rounded overflow-hidden select-none">
                                    <div className="w-full mb-5 flex justify-center">
                                        <img
                                            src={blog.img}
                                            alt=""
                                            className="w-full my-0 mx-auto"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-3">
                                        <p className="font-medium text-xl mt-1">{blog.name}</p>
                                        <button className="underline flex items-center pb-1 text-base font-medium">
                                            More Blog
                                            <FaArrowRight className="ml-2" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </SwiperItem>
                    </div>
                </div>
            </div>
        </>
    );
=======
  return <div>Đây là home </div>;
>>>>>>> Trung
}

export default Home;
