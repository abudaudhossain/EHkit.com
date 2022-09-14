import React, { useEffect } from 'react'
import "./menubar.css"


import {
    Container,
    Navbar,
    Nav,
    Form,
    Dropdown,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useFirebase from '../../../hooks/useFirebase'
import { getDataLocalDB } from '../../../hooks/localDB'

const Menubar = () => {

    const { userData, logout } = useFirebase();

    console.log(userData, "userData")



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

                        {
                            userData?.rule === 'admin' && <Link to="/dashboard">Dashboard</Link>
                        }
                        {
                            userData?.email ? (
                                <>
                                    <Link to="/myProfile">My Profile</Link>
                                    <span onClick={() => logout()} className="gs-btn gs-btn-primary login-btn">Log Out</span>
                                </>
                            )
                                : <Link to="/login" className="gs-btn gs-btn-primary login-btn">Login</Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Menubar