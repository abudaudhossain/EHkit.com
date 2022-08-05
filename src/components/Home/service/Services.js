import React from 'react'
import Service from './Service'

import "./services.css"

import Airline from "../../../assets/images/service/1.png"
import Transport from "../../../assets/images/service/2.png"
import Hotel from "../../../assets/images/service/4.png"
import bg from "../../../assets/images/service/bg.png"

const services = [
  {
    title: "Airline Service",
    describe: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: Airline
  },
  {
    title: "Transport Service",
    describe: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: Transport
  },
  {
    title: "Hotel Service",
    describe: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: Hotel
  }
]

const Services = () => {
  return (
    <section className="service-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="item-title">
              <h2>We Provied on demand vehicle rental solution For Our Travelers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>
            
            { 
              services.map((service, index) => <Service key={index} service={service} />)
            }
          </div>
          <div className="col-lg-6">
            <div className="service-img">
              <img src={bg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services