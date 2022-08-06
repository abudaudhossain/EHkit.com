import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <Link to="/details/product/2">
            <div className="popular-pack-block">
                <div className="item-image">
                    <img src="https://www.furniturebari.com/image/cache/catalog/Sofa/US001/U-Shape%20Sofa%20(16)-500x554.jpg" alt="img" />
                    <div className="ribbon">$200</div>
                </div>
                <div className="item-content">
                    <h4><a href="#">Modern U Shaped Fabrics Leather Sofa Bed US001</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...</p>
                    
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="days">
                            <Link to="/pu" className="gs-btn gs-btn-primary">Purchase</Link>
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
        </Link>
    )
}

export default Product