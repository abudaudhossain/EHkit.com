import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import useFirebase from "../../../hooks/useFirebase"

import { useNavigate } from "react-router-dom";
import baseUrl from '../../../hooks/baseUrl';


const ProfileUpdate = () => {
  const [user, serUser] = useState({})
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const { userData } = useFirebase();

  const { register, handleSubmit, } = useForm();
  const onSubmit = async data => {
    console.log(data)
    axios.post(`${baseUrl}/user/updateProfile`, data, {
      headers: {
        'authorization': `Bearer ${userData?.jwt}`
      }
    })
      .then(function (response) {
        const result = response.data.data;
        // handle success
        serUser(result.user[0])
        console.log(user);
        navigate("/myProfile")
        setError(null)
      })
      .catch(function (err) {
        const result = err.response.data;
        // handle error
        setError(result.errorLog)
      })

  }

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
    <section className="container">
      {
        error && <h5>{error?.details}</h5>
      }
      <h3 className="text-center mb-4">Manage My Profile</h3>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Name"  {...register("name", { required: true })} defaultValue={user?.name} />
          <label htmlFor="floatingPassword">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Phone"  {...register("phone", { required: true })} defaultValue={user?.phone} />
          <label htmlFor="floatingPassword">Phone Number</label>
        </div>

        <div className="form-floating mb-3">
          <textarea className="form-control" placeholder="Enter your address" style={{ height: "100px" }} {...register("address", { required: true })} defaultValue={user?.address}></textarea>
          <label htmlFor="floatingTextarea2">Address</label>
        </div>


        <input className='gs-btn gs-btn-primary' type="submit" />
      </form>
    </section>
  )
}

export default ProfileUpdate