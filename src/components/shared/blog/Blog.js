import React from 'react'
import "./blog.css"

const Blog = ({blog}) => {
    return (
        <div className="blog-item">
            <div className="image">
                <img src={blog.img} alt="blog" />
            </div>
            <div className="item-content">
                <h5>{blog.author}</h5>
                <h4><a href="#">{blog.title}</a></h4>
                <p>{
                    blog.description
                    }</p>
                <div className="meta-content">
                    <a href="#"><i className="far fa-user"></i>City Admin</a>| <span><i className="far fa-calendar-alt"></i>{blog.date}</span>|
                    <span><i className="far fa-comments"></i>50</span>
                </div>
            </div>
        </div>
    )
}

export default Blog