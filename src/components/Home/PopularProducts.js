import React from 'react'
import Package from '../shared/Package/Product'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Product from '../shared/Package/Product';

import productsInfo from '../../data/products';



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
                        productsInfo().slice(1, 9).map((product, index) => {
                            return <div key={index}  className="col-lg-3 col-md-6 col-sm-6">
                                <Product product={product} />
                            </div>
                        })
                    }


                </div>
            </div>
        </section >
    )
}

export default PopularProducts;