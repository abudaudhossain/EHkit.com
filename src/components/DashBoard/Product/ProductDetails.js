import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { getProduct } from '../../../data/products';

import { Link } from "react-router-dom"
import axios from 'axios';
import baseUrl from '../../../hooks/baseUrl';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState()
  const [error, setError] = useState();

  useEffect(() => {

    axios.get(`${baseUrl}/product/${id}`,)
      .then(function (response) {
        const result = response.data.data;

        setProduct(result.product)
        // handle success
        setError(null)
      })
      .catch(function (err) {
        const result = err.response.data;
        // handle error
        setError(result.errorLog)
        console.log(error)
      })
  }, [])


  if (!product) {
    return;
  }
  const { image, title, description, price, minimumOrderQuantity, availableQuantity, feature, category, brand } = product;

  return (
    <section>
      <Container>
        <Row>
          <Row className="" >
            <Col sm={12} md={6}>
              <div className="p-2" style={{ width: "100%" }}>
                <img alt='img' src={image} className="img-thumbnail" />
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
                  <Link to={`/dashboard/productUpdate/${id}`} className="gs-btn gs-btn-primary">Update</Link>
                  <a className="gs-btn gs-btn-primary mx-3" >Delete</a>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  )
}

export default ProductDetails