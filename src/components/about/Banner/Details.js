import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './Details.css'

const Details = () => {
  return (
    <div className="container">
      <Container >
        <Row>
          <Col>
            <div className="des-detail">
              <h3>About the company</h3>
              <p>
                Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagit
                sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum veliam nec tellus
                a odio tincidunt auctor.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="des-detail">
              <h3>Our mission</h3>
              <p>
                Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagit
                sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum veliam nec tellus
                a odio tincidunt auctor.
              </p>
              <ul>
                <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                <li><p><i className="ti-check-box"></i> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                
              </ul>
            </div>
          </Col>
          <Col>
            <div className="des-detail">
              <h3>Our mission</h3>
              <p>
                Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagit
                sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum veliam nec tellus
                a odio tincidunt auctor.
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Details