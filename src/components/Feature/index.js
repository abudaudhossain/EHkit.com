import React from 'react'
import "./feature.css"
import {Link} from 'react-router-dom'

const Feature = ({ feature }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="item-icon-box text-center">
        <div className="item-image">
          <img src={feature.img} alt="img"  />
        </div>
        <h4><a href="#">{feature.title}</a></h4>
        <p>{feature.describe}</p>
        <div className="cta-btn">
          <Link to={feature.route} className="gs-btn gs-btn-primary">Our Products</Link>
        </div>
      </div>
    </div>
  )
}

export default Feature