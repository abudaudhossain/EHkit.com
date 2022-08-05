import React from 'react'
import "./team.css"

import member1 from '../../../assets/images/team/team-1.jpg'
import member2 from '../../../assets/images/team/team-2.jpg'
import member3 from '../../../assets/images/team/team-3.jpg'
import Member from './Member'

const members = [
    {
        name: "Merrie Lewis",
        title: "Travel Guider",
        img: member1
    },
    {
        name: "Parks Missie",
        title: "CEO OF Traveler",
        img: member2
    },
    {
        name: "Merrie Lewis",
        title: "Travel Guider",
        img: member3
    },
]


const Team = () => {
    return (
        <section className="team-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <div className="sub-title">
                                <h6>Our Team</h6>
                            </div>
                            <h2>Our Awesome Team</h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {
                        members.map((member, index) => <Member key={index} member={member} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Team