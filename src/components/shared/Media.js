import React from 'react'
import imgMedia from "../../assets/images/footer/1.jpg"

const Media = ({media}) => {
    return (
        <div className="media" style={{display:"flex"}}>
            <img src={imgMedia} alt="bg" />
            <div className="media-body d-flex align-self-center">
                <div className="content">
                    <a href="#"> {media.title} </a>
                    <span> {media.date} </span>
                </div>
            </div>
        </div>
    )
}

export default Media