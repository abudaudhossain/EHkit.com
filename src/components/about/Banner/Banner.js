import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <section className="video-bg-section v2 container my-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="video-bg round">
                            <div className="fancy-box">
                                <figure className="video-box round-os">
                                    <a data-fancybox data-width="640" data-height="360" className="video-btn"
                                        href="https://youtu.be/MPUBSZYESgU"><i className="fas fa-play"></i></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner