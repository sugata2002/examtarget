import React from 'react'
import Navbar from './reuse/Navbar'
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '../assets/homepage/banner1.png'
import banner2 from '../assets/homepage/banner2.png'
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import Advertisement from './reuse/Advertisement';
import DefenceExams from './component/DefenceExams';
import BoardExam from './component/BoardExam';
import JobNotification from './component/JobNotification';
import Footer from './reuse/Footer';
function Homepage() {
    return (
        <div>
            <Navbar></Navbar>

            <div className="mx-10 md:mx-36 mt-10">
                <Swiper
                    className="mySwiper"
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1} // Ensures single slide on all devices
                >
                    <SwiperSlide>
                        <img className="w-full rounded-lg" src={banner1} alt="Banner 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full rounded-lg" src={banner2} alt="Banner 2" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='md:mx-36 sm:mx-10 pt-9'>

                <Advertisement ></Advertisement>
            </div>

            <div className=' md:mx-36 sm:mx-10 pt-9'>
                <DefenceExams></DefenceExams>
            </div>


            <div className=' md:mx-36 sm:mx-10 pt-9'>
                <BoardExam></BoardExam>
            </div>

            <div className=' md:mx-36 sm:mx-10 pt-9'>
                <JobNotification></JobNotification>
            </div>

            <div className=' pt-11'>

            <Footer></Footer>
            </div>

        </div>
    )
}

export default Homepage