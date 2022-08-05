import React from 'react'
import Destination from '../shared/destination/Destination'

import africanPark from "../../assets/images/destination/place-1.jpg"
import vietnam from "../../assets/images/destination/place-2.jpg"
import newYork from "../../assets/images/destination/place-3.jpg"
import tokyo from "../../assets/images/destination/place-5.jpg"
import costaRica from "../../assets/images/destination/place-6.jpg"
import montBlanc from "../../assets/images/destination/place-9.jpg"

const destinations = [
    {
        name : "African Park",
        img : africanPark,
        cities: 10,
        review: 150
    },
    {
        name : "Vietnam",
        img : vietnam,
        cities: 10,
        review: 150
    },
    {
        name : "New York City",
        img : newYork,
        cities: 10,
        review: 150
    },
    {
        name : "Tokyo",
        img : tokyo,
        cities: 10,
        review: 150
    },
    {
        name : "Costa Rica",
        img : costaRica,
        cities: 10,
        review: 150
    },
    {
        name : "Mont Blanc",
        img : montBlanc,
        cities: 10,
        review: 150
    },
    
]

const Destinations = () => {
    return (
        <section className="popular-destination">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <div className="sub-title">
                                <h6>Best</h6>
                            </div>
                            <h2>Popular destinations</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    {
                        destinations.map((destination, index) =>{
                            return <Destination key={index} destination= {destination} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Destinations

