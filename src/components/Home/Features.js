import React from 'react'
import Feature from '../Feature'
import featureInfo from "../../data/features"

const features = featureInfo();

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
                            <h2>Our Unique Features</h2>
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