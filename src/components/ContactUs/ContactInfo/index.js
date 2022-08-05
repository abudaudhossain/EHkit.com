import React from 'react'
import ContactForm from '../ContactForm'
import "./contactInfo.css"

const index = () => {
    return (
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="single-border text-left">
                            <div className="sub-title">
                                <h5>Contact With Us</h5>
                            </div>
                            <h2>If you Have any query, Dont Hesitate <br /> Contact with us</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="contact-inform">
                            <div className="address d-flex align-items-center">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="information">
                                    <h4>Office Address</h4>
                                    46 suvastu arcade, 3rd Floor <br />
                                    palace road, London.
                                </div>
                            </div>
                            <div className="address d-flex align-items-center">
                                <i className="fas fa-phone"></i>
                                <div className=" information">
                                    <h4>Phone</h4>
                                    <a href="tel:+882562562584">88 256 256 2584</a>
                                    <br />
                                    <a href="tel:+882562562584">88 256 256 2584</a>
                                </div>
                            </div>
                            <div className="address d-flex align-items-center">
                                <i className="fas fa-envelope-open"></i>
                                <div className=" information">
                                    <h4>Email</h4>
                                    <a href="mailto:info@example.com">info@example.com</a>
                                    <br />
                                    <a href="mailto:info@example.com">info@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index