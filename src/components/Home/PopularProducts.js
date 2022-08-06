import React from 'react'
import Package from '../shared/Package/Product'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Product from '../shared/Package/Product';

const products = [1, 2, 3, 4, 5, 6, 7, 8]

const PopularProducts = () => {
    return (
        <section className="popular-package bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <div className="sub-title">
                                <h6>Best</h6>
                            </div>
                            <h2>Popular Products</h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {
                        products.map((feature, index) => {
                            return <div key={index}  className="col-lg-3 col-md-6 col-sm-6">
                                <Product />
                            </div>
                        })
                    }


                </div>
            </div>
        </section >
    )
}

export default PopularProducts;