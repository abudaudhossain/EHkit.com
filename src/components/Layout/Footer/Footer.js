import React from 'react'
import { Link } from "react-router-dom"
import Media from '../../shared/Media'
import "./Footer.css"

const medias = [
  {
    title: "Did son unreserved themselves.",
    date: "June 10, 2021"
  },
  {
    title: "Rapturous am eagerness",
    date: "June 10, 2021"
  },
]

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget">
              <div className="footer-logo">
                <Link to="/">
                  <div className="logo">
                    <span>EHkit.com</span>
                  </div>
                </Link>
              </div>
              <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing.</p>
              <div className="footer-social-icon">
                <h4>Follow us</h4>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h4>Latest News</h4>
              </div>
              {
                medias.map((media, index) => {
                  return (<Media key={index} media={media} />)
                })
              }

            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h4>Useful Links</h4>
              </div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/services">services</Link></li>
                <li><Link to="/portfolio">portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h4>Subscribe</h4>
              </div>
              <div className="footer-text">
                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button><i className="fab fa-telegram-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2021, All Right Reserved</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer