import React, { useEffect } from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import { setDataLocalDB } from '../../hooks/localDB';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import baseUrl from '../../hooks/baseUrl'
import useFirebase from '../../hooks/useFirebase'


const PurchaseFrom = ({ product, quantity, totalPrice }) => {

  const { userData } = useFirebase()
  const [user, serUser] = useState({})
  const [error, setError] = useState(null);


  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    data["product"] = product
    data["quantity"] = quantity
    data["totalPrice"] = totalPrice
    data["orderDate"] = new Date().toDateString()
    data["status"] = "completed"

    setDataLocalDB(data);

    alert("Your Order Is successful")
    navigate("/myProfile", { replace: true })
    console.log(data)
  };


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
          console.log(response, "user info")
          setError(null)
        })
        .catch(function (err) {
          const result = err.response.data;
          // handle error
          setError(result.errorLog)

          console.log(err)
        })
    }
    console.log(user, "ehfh")
  }
    , [userData])


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{user.name}</h2>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Name"  {...register("name", { required: true })} defaultValue={user?.name} />
          <label htmlFor="floatingPassword">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input type="email" className="form-control" placeholder="name@example.com" {...register("email", { required: true })} defaultValue={user?.email} />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Phone Number"  {...register("phone", { required: true })} defaultValue={user?.phone} />
          <label htmlFor="floatingPassword">Phone Number</label>
        </div>

        <div className="form-floating mb-3">
          <textarea className="form-control" placeholder="Enter your address" style={{ height: "100px" }} {...register("address", { required: true })} defaultValue={user?.address}></textarea>
          <label htmlFor="floatingTextarea2">Address</label>
        </div>

        <input className='gs-btn gs-btn-primary' type="submit" />
      </form>
    </div>
  )
}

export default PurchaseFrom