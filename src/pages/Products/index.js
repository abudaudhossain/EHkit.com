import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import featuresInfo from "../../data/features"

import "./Products.css"

const features = featuresInfo();

console.log(features)


const index = () => {

  return (
    <Container>
      <Row>
        <Col sm={4} lg={3} xl={2}>
          <nav className="h-100 flex-column align-items-stretch pe-4 border-end">
            <nav className="nav nav-pills flex-column">
              <Link className="nav-link" to="/products">All Products</Link>
              {
                features.map((feature, index) => {
                  return (
                    <div key={index}  >
                      <Link className="nav-link" to={feature.route}>{feature.title}</Link>
                      <nav className="nav nav-pills flex-column">
                        {
                          feature.category.map((categoryItem, index) => <Link key={index} className="nav-link ms-3 my-1" to={`${feature.route}/${categoryItem}`}>{categoryItem}</Link>)
                        }
                      </nav>
                    </div>
                  )
                })
              }
            </nav>
          </nav>
        </Col>
        <Col sm={8} lg={9} xl={10}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default index