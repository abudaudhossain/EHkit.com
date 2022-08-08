import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'

const Index = () => {
  return (
    <Container>
      <Row>
        <Col sm={4} lg={3} xl={2}>
          <nav className="h-100 flex-column align-items-stretch pe-4 border-end">
            <nav className="nav nav-pills flex-column">
              <div className="nav-item ">
                <Link to="/dashboard">Dashboard </Link>
                <Link to="/dashboard/productList">Product List </Link>
                <Link to="/dashboard/productAdd">New Product </Link>
                <Link to="/dashboard/productDetails/2">Product Details </Link>
                <Link to="/dashboard/newCategory">Add New Category </Link>
                <Link to="/dashboard/categoryList">Category List</Link>
                <Link to="/dashboard/orderList">Order List </Link>
                <Link to="/dashboard/user">User List</Link>
                {/* <Link to="/dashboard/">Product Update </Link> */}
              </div>
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

export default Index