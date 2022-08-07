import React from 'react'
import { useForm } from "react-hook-form";
import { setDataLocalDB } from '../../hooks/localDB';
import { useNavigate } from "react-router-dom";


const PurchaseFrom = ({ product, quantity, totalPrice }) => {
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


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Name"  {...register("name", { required: true })} />
          <label htmlFor="floatingPassword">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input type="email" className="form-control" placeholder="name@example.com" {...register("email", { required: true })} />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Phone Number"  {...register("phone", { required: true })} />
          <label htmlFor="floatingPassword">Phone Number</label>
        </div>

        <div className="form-floating mb-3">
          <textarea className="form-control" placeholder="Enter your address" style={{ height: "100px" }} {...register("address", { required: true })}></textarea>
          <label htmlFor="floatingTextarea2">Address</label>
        </div>

        <input className='gs-btn gs-btn-primary' type="submit" />
      </form>
    </div>
  )
}

export default PurchaseFrom