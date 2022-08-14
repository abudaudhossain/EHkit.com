import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { setDataLocalDB } from '../../hooks/localDB';
import { Link, useNavigate } from "react-router-dom";

import './login.css'
import MediaAuth from '../../components/shared/Auth/MediaAuth';
import useFirebase from '../../hooks/useFirebase';

const Index = () => {
    let navigate = useNavigate();
    const { userData } = useFirebase();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
    };

    useEffect(() => {
        if (userData?.email) {
            navigate(-1)
        }
    }, [userData])

    return (
        <section>
            <Container className="Form-container">
                <h2 className="text-center mb-4">Log In Now </h2>
                <div className="footer-widget">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" placeholder="name@example.com" {...register("email", { required: true })} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" placeholder="Password"  {...register("password", { required: true })} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
                            </div>
                            <Link to="/forgetPassword" >Forget password</Link>
                        </div>
                        <input className='gs-btn gs-btn-primary' type="submit" value="Login" />
                    </form>
                    <p className="my-4 text-center">Or Login with others</p>
                    <MediaAuth />

                    <div>
                        <p>Don't have an account?<Link to="/signup" className="switcher-text2 inline-text">Register</Link></p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Index