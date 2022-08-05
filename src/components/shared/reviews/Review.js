import React from 'react'
import img from "../../../assets/images/testimonial/1.jpg"

const Review = ({review}) => {
    return (
        <div className="test-item">
            <div className="quote">
                <i className="fas fa-quote-left"></i>
            </div>
            <p>
                {
                    review.describe
                }
            </p>
            <div className="content">
                <div className="icon">
                    <img src={img} alt="test" />
                </div>
                <div className="title">
                    <h4><a href="#">{review.name}</a></h4>
                    <span>{review.title}</span>
                </div>
            </div>
        </div>
    )
}

export default Review