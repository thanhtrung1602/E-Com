import { ReactNode } from 'react';
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwiperItemProps<T> {
    items: T[]; //Mảng dữ liệu
    children: (item: T, index: number) => ReactNode; //Lặp qua mảng
    slidesPerView: number; //Bao nhiêu phân tử trong mảng được hiện
    spaceBetween: number; //Khoảng cách
    className?: string;
    autoplay?: boolean;
    navigation?: boolean; //Được phép scroll ngang để kéo slide hay không
    pagination?: boolean; //Thanh phân trang
}

function SwiperItem<T>({
    items,
    children,
    slidesPerView,
    spaceBetween,
    className = '',
    autoplay = false,
    navigation = false,
    pagination = false
}: SwiperItemProps<T>) {
    return (
        <>
            <Swiper
                className={className}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                pagination={pagination ? { clickable: true } : undefined}
                navigation={
                    navigation
                        ? {
                            nextEl: '.button-next-slide',
                            prevEl: '.button-prev-slide',
                        }
                        : undefined
                }
                autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : undefined}
                modules={[Autoplay, Navigation]}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        {children(item, index)}
                    </SwiperSlide>
                ))}
                {
                    navigation ?
                        (
                            <>
                                <div className='absolute z-10 top-1/2 -translate-y-1/2 group-hover:left-0 -left-[23rem] button-prev-slide text-white size-10 bg-[#9096A2] grid place-content-center duration-300 rounded-tr-full rounded-br-full select-none cursor-pointer'>
                                    <FaArrowLeft />
                                </div>
                                <div className='absolute z-10 top-1/2 -translate-y-1/2 group-hover:right-0 -right-[23rem] button-next-slide text-white size-10 bg-[#9096A2] grid place-content-center duration-300 rounded-tl-full rounded-bl-full select-none cursor-pointer'>
                                    <FaArrowRight />
                                </div>
                            </>
                        )
                        :
                        undefined
                }
            </Swiper></>
    );
}

export default SwiperItem;