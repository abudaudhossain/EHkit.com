import React from 'react'
import Feature from '../Feature'

import travel_1 from "../../assets/images/feature/travel-1.png"
import travel_2 from "../../assets/images/feature/travel-2.png"
import travel_3 from "../../assets/images/feature/travel-3.png"

const features = [
    {
        title: "Reservation",
        describe: "At vero eoset accusamus etiusto odio dignissimos ducimus qui exercitation aliqua blanditiis praesentium",
        img: travel_1,

    },
    {
        title: "Worldwide Service",
        describe: "At vero eoset accusamus etiusto odio dignissimos ducimus qui exercitation aliqua blanditiis praesentium",
        img: travel_2,

    },
    {
        title: "Payment",
        describe: "At vero eoset accusamus etiusto odio dignissimos ducimus qui exercitation aliqua blanditiis praesentium",
        img: travel_3,

    },
]

const Features = () => {
    return (
        <section className="feature-section bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <div className="sub-title">
                                <h6>Feature</h6>
                            </div>
                            <h2>Unique Features</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        features.map((feature, index) => {
                            return <Feature key={index} feature={feature} />
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Features