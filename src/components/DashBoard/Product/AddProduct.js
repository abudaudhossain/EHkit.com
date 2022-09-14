import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import baseUrl from '../../../hooks/baseUrl';
import useFirebase from "../../../hooks/useFirebase"



const AddProduct = () => {
  const [catagories, setCategories] = useState([])
  const [features, setFeatures] = useState([])
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const { register, handleSubmit, } = useForm();
  const { userData } = useFirebase();



  const onSubmit = async data => {

    // image uploading
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image, image.name)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_KEY}`;
    fetch(url, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(result => {
        const imageUrl = result.data.url;
        data.image = imageUrl;

        // upload product in database 

        axios.post(`${baseUrl}/addNewProduct`, data, {
          headers: {
            'authorization': `Bearer ${userData?.jwt}`
          }
        })
          .then(function (response) {
            const result = response.data.data;
            // handle success
            // serUser(result)
            console.log(result);
            navigate("/dashboard/productList")
            setError(null)
          })
          .catch(function (err) {
            const result = err.response.data;
            // handle error
            setError(result.errorLog)
          })



      })

    // navigate("/dashboard/productList", { replace: true })
  };

  console.log(error)

  useEffect(() => {

    axios.get(`${baseUrl}/categories`,)
      .then(function (response) {
        const result = response.data.data;

        setCategories(result.catagories)
        // handle success
        setError(null)
      })
      .catch(function (err) {
        const result = err.response.data;
        // handle error
        setError(result.errorLog)
        console.log(error)
      })
  }, [])


  const categoryHandler = (e) => {
    console.log(e.target.value)

    axios.get(`${baseUrl}/features`,)
      .then(function (response) {
        const result = response.data.data;

        setFeatures(result.features)
        // handle success
        setError(null)
      })
      .catch(function (err) {
        const result = err.response.data;
        // handle error
        setError(result.errorLog)
        console.log(error)
      })



  }

  return (
    <section>
      <h3 className="text-center mb-4">Add New Product</h3>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Name"  {...register("title", { required: true })} />
          <label htmlFor="floatingPassword">Product Title</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" placeholder="Product price"  {...register("price", { required: true })} />
          <label htmlFor="floatingPassword">Product Price</label>
        </div>

        <div className="form-floating mb-3">
          <input type="number" className="form-control" placeholder="Minimum Order quantity"  {...register("minimumOrderQuantity", { required: true })} />
          <label htmlFor="floatingPassword">Minimum Order quantity</label>
        </div>

        <div className="form-floating mb-3">
          <input type="number" className="form-control" placeholder="Available Quantity"  {...register("availableQuantity", { required: true })} />
          <label htmlFor="floatingPassword">Available Quantity</label>
        </div>

        <div className="form-floating mb-3">
          <select className="form-select form-control" aria-label="select category" {...register("categoryToken", { required: true })} onChange={categoryHandler} defaultValue={'DEFAULT'}>
            <option value="DEFAULT">Select A Category</option>
            {
              catagories?.map((category, index) => <option value={category.token} key={index}>{category.title}</option>)
            }
          </select>
        </div>

        <div className="form-floating mb-3">
          <select className="form-select form-control" aria-label="select feature" {...register("featureToken", { required: true })} defaultValue={'DEFAULT'}>
            <option value="DEFAULT">Select A Feature</option>
            {
              features?.map((feature, index) => <option value={feature?.token} key={index}>{feature?.title}</option>)
            }
          </select>
        </div>



        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Feature"  {...register("brand", { required: true })} />
          <label htmlFor="floatingPassword">Brand Name</label>
        </div>

        <div className="form-floating mb-3">
          <textarea className="form-control" placeholder="Enter your description" style={{ height: "100px" }} {...register("description", { required: true })}></textarea>
          <label htmlFor="floatingTextarea2">Description</label>
        </div>

        <div className=" mb-3">
          <input type="file" className="form-control" placeholder="Feature"  {...register("image", { required: true })} />
        </div>

        <input className='gs-btn gs-btn-primary' type="submit" />
      </form>
    </section>
  )
}

export default AddProduct





{/* 
        */}