import React from 'react'
import BusinessCard from './BusinessCard'
import businessItemInfo from "../../../data/business"

const businessItems = businessItemInfo();

const Business = () => {
  return (
    <section className="feature-section bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <div className="sub-title">
                                <h6>The most</h6>
                            </div>
                            <h2>Millions Business Trust Us</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                {
                  businessItems.map((business, index) => <BusinessCard key={index} business={business}/>)
                }
                  

                </div>
            </div>
        </section>
  )
}

export default Business