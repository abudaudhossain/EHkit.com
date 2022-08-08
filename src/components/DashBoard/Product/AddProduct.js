import React from 'react'
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
const key = "de96881a1578dbb13ec03b5abd341e47";
const AddProduct = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, } = useForm();
  const onSubmit = async data => {

    // image uploading
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image, image.name)
    const url = `https://api.imgbb.com/1/upload?key=${key}`;
    fetch(url, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(result => {
        const imageUrl = result.data.url;
        data.image = imageUrl
        console.log(data);
      })

    // navigate("/dashboard/productList", { replace: true })
  };

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
          <input type="text" className="form-control" placeholder="Brand name"  {...register("feature", { required: true })} />
          <label htmlFor="floatingPassword">Feature</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Category"  {...register("category", { required: true })} />
          <label htmlFor="floatingPassword">Category</label>
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