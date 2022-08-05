import React from 'react'
import "./menubar.css"
import logo from "../../../assets/images/logo/logo.png"

import {
    Container,
    Navbar,
    Nav,
    Form,
    Dropdown,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menubar = () => {
    return (
        <Navbar expand="lg" className="navbar">
            <Container >
                <Navbar.Brand as={Link} to="/">
                    <div className="logo">
                        <span>EHkit.com</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 nav-item"
                        style={{ maxHeight: '100px', display: 'flex', alignItems: "center" }}
                        navbarScroll
                    >
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/myProfile">My Profile</Link>

                        {/* <Button className='bg-btn m-2 pt-10 pb-10' >Booking Now</Button> */}
                       

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Menubar