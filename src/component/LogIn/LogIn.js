import React, { useContext, useState } from 'react';
import './Login.css'
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import toast from 'react-hot-toast';

const LogIn = () => {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const { logIn, resetPassword } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                toast.success('log in successfully')
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error('login error', error);
                const errorMessage = error.message;
                toast.error(errorMessage);
            })
    }

    const handleEmailField = (event) => {
        const userEmail = event.target.value;
        console.log(userEmail);
        setEmail(userEmail);
    }

    const handleForgetPassword = () => {
        resetPassword(email)
            .then(() => {
                toast.success('reset code sent');
            })
    }

    return (
        <div className=' d-flex justify-content-center  login-page'>
            <form onSubmit={handleSubmit} className='log-in pt-3 ps-4 pe-4 mt-5'>
                <h2 className=' text-center '>LogIn</h2>
                <hr />

                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input onBlur={handleEmailField} name='email' type="email" id="form2Example1" className="form-control search-field" required />

                </div>


                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
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

                        <Link onClick={handleForgetPassword} >Forgot password?</Link>
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