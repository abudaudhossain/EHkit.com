import React from 'react'

const Member = ({member}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-xm-6">
            <div className="inner-box">
                <div className="image-box">
                    <figure className="image">
                        <img src={member.img} alt="team" />
                        <div className="social-links">
                            <div className="caption-box">
                                <h4 className="name"><a href="#">{member.name}</a></h4>
                                <span className="designation">{member.title}</span>
                            </div>
                            <ul>
                                <li>
                                    <a href="#"><span className="fab fa-facebook-f"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="fab fa-twitter"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="fab fa-linkedin-in"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="fab fa-pinterest-p"></span></a>
                                </li>
                            </ul>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Member