import React from 'react'
import './Details.css'

import img from '../../assets/images/destination/destinations-details-image.jpg'
import BookingFrom from './BookingFrom'

const Details = () => {
  return (
    <section className="popular-destination">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <div className="destination-details">
              <div className="image">
                <img src={img} alt="jpg" />
              </div>
              <div className="des-detail">
                <h3>Overview</h3>
                <p>
                  Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagit
                  sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum veliam nec tellus
                  a odio tincidunt auctor.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                </p>
              </div>
              <div className="des-detail">
                <h3>Highlight</h3>
                <ul>
                  <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                  <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                  <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                  <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                  <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                  <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                  <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                </ul>
              </div>
              <div className="detail-table">
                <table className="table caption-top">
                  <tbody>
                    <tr>
                      <td>Destination</td>
                      <td><span>New York City</span></td>
                    </tr>
                    <tr>
                      <td>Languages Spoken</td>
                      <td><span>English</span></td>
                    </tr>
                    <tr>
                      <td>Currency Used</td>
                      <td><span>USD</span></td>
                    </tr>
                    <tr>
                      <td>Depature</td>
                      <td><span>Yes Required</span></td>
                    </tr>
                    <tr>
                      <td>Departure Time</td>
                      <td><span>01 April, 2021   10.00AM</span></td>
                    </tr>
                    <tr>
                      <td>Return Time</td>
                      <td><span>08 April, 2021   10.00AM</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="page-side-bar">
              <BookingFrom />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details