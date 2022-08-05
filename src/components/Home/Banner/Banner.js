import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCreative, Pagination } from "swiper";

import "./banner.css"
import BannerSlide from './BannerSlide '
import banner from '../../../data/banner'

const banners = banner();


function Banner() {
    return (
        <div className="banner-section">
            <div className="container">
                <Swiper

                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    modules={[Autoplay, EffectCreative, Pagination]}

                    loop={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-125%", 0, -800],
                            rotate: [0, 0, -90],
                        },
                        next: {
                            shadow: true,
                            translate: ["125%", 0, -800],
                            rotate: [0, 0, 90],
                        },
                    }}

                    className="mySwiper5 mySwiper"
                >
                    {
                        banners.map((banner, index) =>{
                            return <SwiperSlide key={index}><BannerSlide banner={banner}/></SwiperSlide>
                        })
                    }
                    

                </Swiper>
                {/*  */}
            </div>
        </div>
    )
}

export default Banner