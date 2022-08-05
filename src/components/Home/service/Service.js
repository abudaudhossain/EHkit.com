import React from 'react'

const Service = ({ service }) => {
    return (
        <div className="service-content">
            <div className="icon-box">
                <img src={service.img} alt="img" />
            </div>
            <div className="content">
                <h5><a href="#">{service.title}</a></h5>
                <p>
                    {
                        service.describe
                    }
                </p>
            </div>
        </div>
    )
}

export default Service