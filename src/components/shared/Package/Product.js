import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    const { title, image, price, description, id } = product;
    return (

        <div className="popular-pack-block">
            <div className="item-image">
                <img src={image} alt="img" />
                <div className="ribbon">{price} TKB</div>
            </div>
            <div className="item-content">
                <h4>{title.slice(0, 35)}...</h4>
                <p>{description.slice(0, 60)}</p>

                <div className="d-flex align-items-center justify-content-between">
                    <div className="days">
                        <Link to={`/purchase/${id}`} className="gs-btn gs-btn-primary">Purchase</Link>
                    </div>
                    <div className="review">

                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>

                        <span className="enrolled">(20)</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product