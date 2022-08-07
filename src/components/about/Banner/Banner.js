import React, { useState } from 'react'
import VideoPlayer from '../../Home/Banner/VideoPlayer'
import './banner.css'

const Banner = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <section className="video-bg-section v2 container my-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="video-bg round">
                            <div className="fancy-box">
                                <figure className="video-box round-os" onClick={() => setModalShow(true)}>
                                    <a data-fancybox data-width="640" data-height="360" className="video-btn"
                                    ><i className="fas fa-play"></i></a>
                                </figure>
                            </div>

                            <VideoPlayer
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner