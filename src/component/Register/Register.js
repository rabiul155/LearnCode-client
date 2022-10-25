import React from 'react';
import './Register.css'
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className=' d-flex justify-content-center align-items-center'>
            <form className='register pt-3 ps-4 pe-4 mt-3'>

                <h2 className=' text-center'>Register</h2>
                <hr />

                <div className="form-outline mb-3">
                    <label className="form-label " htmlFor="form2Example1">Username</label>
                    <input name='username' type="text" id="form2Example1" className="form-control search-field" />
                </div>

                <div className="form-outline mb-3">
                    <label className="form-label " htmlFor="form2Example1">Email address</label>
                    <input name='email' type="email" id="form2Example1" className="form-control search-field" />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label " htmlFor="form2Example2">Password</label>
                    <input name='password' type="password" id="form2Example2" className="form-control search-field" />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-3 w-100">Register</button>

                <div className="text-center">
                    <p className=' m-0 p-0'>Have an Account? <Link to='/login'>LogIn</Link></p>
                    <p className=' m-1 p-0'>or sign up with</p>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaGoogle className=' fs-4'></FaGoogle>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaFacebook className=' fs-4'></FaFacebook>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaGithub className=' fs-4'></FaGithub>
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Register;