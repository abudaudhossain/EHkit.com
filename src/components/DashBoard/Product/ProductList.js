import React, { useEffect } from 'react'
import "./product.css"
import { Link } from 'react-router-dom'

import productsInfo from "../../../data/products";
import { useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../hooks/baseUrl';



const ProductList = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()

  useEffect(() => {

    axios.get(`${baseUrl}/allProduct`,)
      .then(function (response) {
        const result = response.data.data;

        setProducts(result.products)
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

// console.log(products)

  return (
    <section>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ width: "80px" }}>Seral No</th>
            <th scope="col" className="tb-img-box">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price per unit</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map((product, index) => {
              return (<tr key={index}>
                <th scope="row">{index}</th>
                <td className="tb-img-box">
                  <img src={product.image} className='img-thumbnail' alt='img' />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/dashboard/productDetails/${product.token}`}>Details</Link>
                </td>
              </tr>)
            })
          }

        </tbody>
      </table>
    </section>
  )
}

export default ProductList