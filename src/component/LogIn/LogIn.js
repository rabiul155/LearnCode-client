import React from 'react';
import './Login.css'
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className=' d-flex justify-content-center align-items-center '>
            <form className='log-in pt-3 ps-4 pe-4 mt-3'>

                <h2 className=' text-center'>LogIn</h2>
                <hr />

                <div className="form-outline mb-3">
                    <label className="form-label " htmlFor="form2Example1">Email address</label>
                    <input name='email' type="email" id="form2Example1" className="form-control search-field" required />

                </div>


                <div className="form-outline mb-3">
                    <label className="form-label " htmlFor="form2Example2">Password</label>
                    <input name='password' type="password" id="form2Example2" className="form-control search-field" required />

                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">

                        <div className="form-check">
                            <input className="form-check-input search-field" type="checkbox" value="" id="form2Example31" />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">

                        <Link href="#!">Forgot password?</Link>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4 w-100">LogIn</button>

                <div className="text-center">
                    <p className=' m-0 p-0'>Not a member? <Link to='/register'> Register</Link></p>
                    <p className=' m-1 p-0'>or sign up with:</p>
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

export default LogIn;