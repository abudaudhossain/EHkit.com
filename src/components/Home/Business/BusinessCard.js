import React from 'react'
import "./businessCard.css"

const BusinessCard = ({business }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="business-item-box text-center">
                <div className="item-image">
                    <img src={business.image} alt="img" />
                </div>
                <h2>{business.amount}</h2>
                <h4>{business.title}</h4>
            </div>
        </div>
    )
}

export default BusinessCard