import React from 'react'
import "./subBanner.css"

import aboutImg from "../../../assets/images/about/1.jpg"
import CCAgent from "../../../assets/images/about/call-center-agent.png"
import lightbulb from "../../../assets/images/about/lightbulb.png"
import moneyBag from "../../../assets/images/about/money-bag.png"
import antivirus from "../../../assets/images/about/antivirus.png"

const services = [
    {
        title: "Safety Travel System",
        img: antivirus
    },
    {
        title: "Budget Friendly Tour",
        img: moneyBag
    },
    {
        title: "Right Solution",
        img: lightbulb
    },
    {
        title: "24/7 Support",
        img: CCAgent
    },
]

const SubBanner = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="about-img">
                            <div className="video-bg round">
                                <img src={aboutImg} alt="blog" />
                                <div className="fancy-box">
                                    <figure className="video-box round-os">
                                        <a data-fancybox data-width="640" data-height="360" className="video-btn" href="https://youtu.be/MPUBSZYESgU"
                                        ><i className="fas fa-play"></i
                                        ></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="item-title">
                            <h2>We make the best for all our Traveler customers.</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                            </p>
                        </div>
                        <div className="row">

                            {
                                services.map((service, index) => {
                                    return (
                                        <div className="col-lg-6 col-md-6 col-6" key={index}>
                                            <div className="item-icon-content">
                                                <img src={service.img} alt="img" />
                                                <div className="content-meta">
                                                    <a href="#">{service.title}</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="item-btn">
                            <a href="#" className="gs-btn gs-btn-primary">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubBanner