/* eslint-disable @typescript-eslint/no-unused-vars */
import iphoneBanner from "~/assets/images/iphoneBanner.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { FaApple, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


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
                className='relative group'
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.button-next-slide',
                    prevEl: '.button-prev-slide',
                }}
                modules={[Autoplay, Navigation]}
            >
                {slider.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`relative h-100px flex justify-around items-center text-white ${slide.color} select-none px-[135px] py-12`} >
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
                <div className='absolute z-10 top-1/2 -translate-y-1/2 group-hover:left-0 -left-[23rem] button-prev-slide text-black size-10 bg-white grid place-content-center duration-300 rounded-tr-full rounded-br-full'>
                    <FaArrowLeft />
                </div>
                <div className='absolute z-10 top-1/2 -translate-y-1/2 group-hover:right-0 -right-[23rem] button-next-slide text-black size-10 bg-white grid place-content-center duration-300 rounded-tl-full rounded-bl-full'>
                    <FaArrowRight />
                </div>
            </Swiper>
        </div >
    );
}
