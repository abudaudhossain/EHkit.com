import React from 'react'
import Banner from '../../components/Home/Banner/Banner'
import Business from '../../components/Home/Business/Business'
import Features from '../../components/Home/Features'
import PopularProducts from '../../components/Home/PopularProducts'
import Reviews from "../../components/shared/reviews/Reviews"

const index = () => {
  return (
    <>
      <Banner />
      <Features />
      <PopularProducts />
      <Business />
      <Reviews />
    </>
  )
}

export default index