import React from 'react'
import Package from '../shared/Package/Package'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const packages = [1, 2, 3, 4, 5, 6, 7]

const Packages = () => {
    return (
        <section className="popular-package bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <div className="sub-title">
                                <h6>Best</h6>
                            </div>
                            <h2>Popular Package</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 py-5">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 1000,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {
                                packages.map(index => {
                                    return (
                                        <SwiperSlide >
                                            <Package />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Packages