import React from 'react';
import './Register.css'
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import toast from 'react-hot-toast';


const Register = () => {

    const navigate = useNavigate();

    const { createUser, createUserGoogle } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                toast.success('Accout created successfully!!!')
                form.reset();
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.error('create user error ', error)
            })
    }


    const handleGoogleSignIn = () => {
        createUserGoogle()
            .then(result => {
                toast.success('Accout created successfully!!!')
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(e => {
                console.error('google sign in error', e)
            })
    }

    return (

        <div className=' d-flex justify-content-center  register-page'>
            <form onSubmit={handleSubmit} className='register pt-3 ps-4 pe-4 mt-2'>

                <h2 className=' text-center'>Register</h2>
                <hr />

                <div className="form-outline mb-3">
                    <label className="form-label " htmlFor="form2Example1">Username</label>
                    <input name='username' type="text" id="form2Example1" className="form-control search-field" required />
                </div>

                <div className="form-outline mb-3">
                    <label className="form-label " htmlFor="form2Example1">PhotoURL</label>
                    <input name='photoURL' type="text" id="form2Example1" className="form-control search-field" />
                </div>


                <div className="form-outline mb-3">
                    <label className="form-label " htmlFor="form2Example1">Email address</label>
                    <input name='email' type="email" id="form2Example1" className="form-control search-field" required />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label " htmlFor="form2Example2">Password</label>
                    <input name='password' type="password" id="form2Example2" className="form-control search-field" required />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-3 w-100">Register</button>

                <div className="text-center">
                    <p className=' m-0 p-0'>Have an Account? <Link to='/login'>LogIn</Link></p>
                    <p className=' m-1 p-0'>or sign up with</p>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaGoogle onClick={handleGoogleSignIn} className=' fs-4'></FaGoogle>
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