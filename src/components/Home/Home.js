import React from 'react'
import Reviews from '../shared/reviews/Reviews'
import SubBanner from '../shared/SubBanner/SubBanner'
import Team from '../shared/team/Team'
import Banner from './Banner/Banner'
import Blogs from './Blogs'
import Destinations from './Destinations'
import Features from './Features'
import Packages from './Packages'
import Services from './service/Services'

const Home = () => {
  return (
    <>
      <Banner />
      <SubBanner />
      <Features />
      <Services />
      <Team />
      <Destinations />
      <Reviews />
      <Packages />
      <Blogs />
    </>
  )
}

export default Home