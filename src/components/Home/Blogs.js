import React from 'react'
import Blog from '../shared/blog/Blog'

import img from "../../assets/images/blog/1.jpg"
import img1 from "../../assets/images/blog/2.jpg"
import img2 from "../../assets/images/blog/3.jpg"

const blogs = [
    {
        title: "Recreation Programs From Watery Landscape",
        author: "Public Awareness",
        img: img,
        description: "Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor.",
        date: "June 6, 2021"

    },
    {
        title: "Self Guided Driving & Tour walk of Greater City",
        author: "Tourist Guide",
        img: img2,
        description: "Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor.",
        date: "June 6, 2021"
    },
    {
        title: "Recreation Programs From Watery Landscape",
        author: "Public Awareness",
        img: img1,
        description: "Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor.",
        date: "June 6, 2021"

    }

]

const Blogs = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <div className="sub-title">
                                <h6>Blog</h6>
                            </div>
                            <h2>Latest Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        blogs.map((blog, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <Blog blog={blog} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Blogs