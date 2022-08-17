import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import profileImg from '../../../assets/images/team/team-1.jpg'
import baseUrl from '../../../hooks/baseUrl'
import useFirebase from '../../../hooks/useFirebase'

const MyProfile = () => {
    const { userData } = useFirebase()
    const [user, serUser] = useState({})
    const [error, setError] = useState(null);
    console.log(baseUrl)

    useEffect(() => {
        if (userData?.jwt) {
            axios.get(`${baseUrl}/user/profile`, {
                headers: {
                    'authorization': `Bearer ${userData?.jwt}`
                }
            })
                .then(function (response) {
                    const result = response.data.data;
                    // handle success
                    serUser(result.user[0])
                    setError(null)
                })
                .catch(function (err) {
                    const result = err.response.data;
                    // handle error
                    setError(result.errorLog)
                })
        }
    }
        , [userData])

    return (
        <div className="order-card popular-pack-block w-50">
            <div className="img-container" style={{ width: '230px' }}>
                <img src={user?.image ? user?.image : profileImg} alt='img' className='img-thumbnail' height={100} />
            </div>
            <div className="item-container">
                <h4>{user?.name}</h4>
                <p>Email:  <span className='value'>{user?.email}</span></p>
                <p>Phone:  <span className='value'>{user?.phone}</span></p>
                <p>User Rule:  <span className='value'>{user?.rule}</span></p>
                <p>Address:  <span className='value'>{user?.address}</span></p>
                <Link className="" to="/profile/update">Edit Profile</Link>
            </div>
        </div>
    )
}

export default MyProfile