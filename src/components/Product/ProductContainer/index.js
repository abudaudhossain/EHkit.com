import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import productInfo from '../../../data/products'
import Product from '../../shared/Package/Product'


const Index = () => {
  let myParams = useParams();
  const [products, setProducts] = useState(productInfo(myParams?.feature, myParams?.category))

  useEffect(() => {
    setProducts(productInfo(myParams?.feature, myParams?.category))
  }, [myParams])



  return (
    <section className="row">
      {
        products.map((product, index) => {
          return <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <Product product = {product} />
          </div>
        })
      }
    </section>
  )
}

export default Index