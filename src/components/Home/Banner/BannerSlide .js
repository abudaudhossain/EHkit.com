import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'

const BannerSlide = ({ banner }) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="banner-content">
                    <h1>{banner.title}</h1>
                    <p>{banner.description}</p>
                    <div className="banner-btn">
                        <Link to="/products/all" className="gs-btn gs-btn-primary">Explore Now</Link>
                        <div className="video-btn">

                            <div className="fancy-box">
                                <div className="video-box round-os" onClick={() => setModalShow(true)}>
                                    <a data-fancybox data-width="640" data-height="360" className="video-btn"
                                    ><i className="fas fa-play"></i>Watch Now</a>
                                </div>
                            </div>
                            
                            <VideoPlayer
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="banner-image">
                    <img src={banner.image} alt="img" width={"100%"} height={"100%"} />
                </div>
            </div>
        </div>
    )
}

export default BannerSlide 