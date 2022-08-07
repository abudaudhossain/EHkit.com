import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { getProduct } from '../../data/products'
import MyImgMagnifier from './MyImgMagnifier'
import { useParams } from "react-router-dom";

import "./purchase.css"
import PurchaseFrom from './PurchaseFrom'

const Purchase = () => {
    const { id } = useParams();

    const product = getProduct(parseInt(id));
    const { image, title, description, price, minimumOrderQuantity, availableQuantity, feature, category, brand } = product;

    const [quantity, setQuantity] = useState(minimumOrderQuantity);
    const [totalPrice, setTotalPrice] = useState(quantity * price)
    const [error, setError] = useState(false);

    const quantityHandler = (e) => {
        let input = e.target.value;
        if (input >= minimumOrderQuantity && input <= availableQuantity) {

            setQuantity(input);
            setTotalPrice(input * price)
            setError(false);
        } else {
            setError(`Quantity should be ${minimumOrderQuantity} more than and ${availableQuantity} less than`)
        }
    }

    console.log(quantity)
    return (
        <>
            <section className="container">
                <Row className="purchase-row" >
                    <Col sm={12} md={6}>
                        <div className="img-container p-2">
                            <MyImgMagnifier img={image} />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>

                        <div className="purchase-container p-2">
                            <h4>{title}</h4>
                            <p>{description}</p>
                            <p>Feature: <span className='value'>{feature}</span>  | Category: <span className='value'>{category}</span> | Brand: <span className='value'>{brand}</span></p>
                            <p>Review :  <span style={{ color: "gold" }}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <span className="enrolled">(20)</span>
                            </span>
                            </p>
                            <p>Price: <span className='value'>{price} Tk</span></p>
                            <p>Minimum Order Quantity: <span className='value'>{minimumOrderQuantity}</span></p>
                            <p>Available Quantity: <span className='value'>{availableQuantity}</span></p>
                            <div>
                                <p className="pb-3">Quantity: <input type="number" defaultValue={quantity} onChange={quantityHandler} /></p>

                                {
                                    error && (<div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>)
                                }

                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className='container'>
                <Row>
                    <Col>
                        <h2 className="mb-3">Purchase Product Information</h2>
                        <h4>Product Name: {title}</h4>
                        <p>Price Per Unit: <span className='value'>{price} Tk</span></p>
                        <p>Total Quantity: <span className='value'>{quantity}</span></p>
                        <p>Total Price: <span className='value'>{totalPrice} Tk</span></p>

                    </Col>
                    <Col>
                        <PurchaseFrom product={product} quantity={quantity} totalPrice={totalPrice} />
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Purchase