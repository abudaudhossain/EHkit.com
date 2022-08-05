import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


import Review from './Review'
import "./Reviews.css"

const reviews = [
    {
        name: "Albert Smith",
        title: "Traveller",
        describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to."
    },
    {
        name: "Abu Daud",
        title: "Developer",
        describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to."
    },
    {
        name: "Albert Smith",
        title: "Traveller",
        describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to."
    },
    {
        name: "Albert Smith",
        title: "Traveller",
        describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to."
    },
    {
        name: "Albert Smith",
        title: "Traveller",
        describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to."
    },
]

const Reviews = () => {

    return (
        <section className="testimonial-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <div className="sub-title">
                                <h6>Testimonials</h6>
                            </div>
                            <h2>Customer Review</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Swiper
                            slidesPerView={2}
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
                                reviews.map((review, index) => {
                                    return (
                                    <SwiperSlide key={index}>
                                        <Review review={review}/>
                                    </SwiperSlide>)
                                })
                            }
                        </Swiper> 

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews