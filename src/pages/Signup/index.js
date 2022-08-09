import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { setDataLocalDB } from '../../hooks/localDB';
import { useNavigate, Link } from "react-router-dom";


const Index = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {


    alert("Your Order Is successful")
    //   navigate("/myProfile", { replace: true })
    console.log(data)
  };

  return (
    <section>
      <Container className="Form-container">
        <h2>Sign Up Now</h2>
        <div className="footer-widget">
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
              <input type="password" className="form-control" placeholder="Password"  {...register("password", { required: true })} />
              <label htmlFor="floatingPassword">Password</label>
            </div>



            <input className='gs-btn gs-btn-primary' type="submit" value="SignUp" />
          </form>


          <p className="my-4 text-center">Or Login with others</p>
          <div className="footer-social-icon text-center">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-google-plus-g"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>

          <div>
            <p>Have an account?<Link to="/login" class="switcher-text2 inline-text">Login</Link></p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Index