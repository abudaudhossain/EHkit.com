import React from 'react'
import { Container } from 'react-bootstrap'
import MyProfile from './MyProfile/MyProfile'
import Orders from './Order/Orders'

const Profile = () => {
    return (
        <Container>
            <h4 className="mt-4">My Profile</h4>
            <MyProfile />
            <h4 className="text-center mt-4">My Order</h4>
            <Orders />
        </Container>
    )
}

export default Profile