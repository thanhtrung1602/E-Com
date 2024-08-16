/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import iphoneBanner from "~/assets/images/iphoneBanner.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaApple } from 'react-icons/fa';

const slider = [
    {
        color: 'bg-black',
        icon: <FaApple className='w-16 h-20' />,
        name: 'iPhone 14 Series',
        content: "Up to 10% off Voucher",
        button: 'Shop Now',
        url: iphoneBanner
    },
    {
        color: "bg-slate-700",
        icon: <FaApple />,
        name: 'iPhone 14 Series',
        content: "Slider 2",
        button: 'Shop Now',
        url: iphoneBanner
    },
    {
        color: "bg-red-700",
        icon: <FaApple />,
        name: 'iPhone 14 Series',
        content: "Slider 3",
        button: 'Shop Now',
        url: iphoneBanner
    }
]

export default function Banner() {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {slider.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`h-100px flex justify-around items-center text-white ${slide.color} select-none px-36 py-12`} >
                            <div className=''>
                                <p className='flex items-center gap-x-2 pb-2'>
                                    {slide.icon}
                                    <span className='text-3xl'>{slide.name}</span>
                                </p>
                                <p className='text-4xl pb-2 font-semibold'>{slide.content}</p>
                                <button className='bgborder-b-[0.5px]'>{slide.button}</button>
                            </div>
                            <img src={slide.url} alt="" className='' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
}
