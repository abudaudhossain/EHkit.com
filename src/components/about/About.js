import React from 'react'
import Packages from '../Home/Packages'
import Reviews from '../shared/reviews/Reviews'
import Banner from './Banner/Banner'
import Details from './Banner/Details'
import Team from './Team'

const About = () => {
    return (
        <div>
            <Banner />
            <Details />
            <Reviews />
            <Team />
            <Packages />
        </div>
    )
}

export default About