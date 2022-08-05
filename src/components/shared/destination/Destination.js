import React from 'react'
import "./destination.css"

const Destination = ({ destination }) => {
    return (
        <div className="col-md-6 col-lg-4 col-sm-6">
            <div className="destination-item-content">
                <div className="image">
                    <img src={destination.img} alt="destination" />
                </div>
                <div className="item-overlay">
                    <div className="content">
                        <h4><a href="#">{destination.name}</a></h4>
                        <div className="content-wrapper">
                            <div className="content-meta d-flex align-items-center">
                                <div className="meta">
                                    <i className="ti-location-pin"></i>
                                    {destination.cities} Cities
                                </div>
                                <div className=""><i className="ti-eye"></i>
                                    20+ Tour Places
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination