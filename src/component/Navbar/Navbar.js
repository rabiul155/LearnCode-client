import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container">
                    <Link className="navbar-brand text-white fw-bolder">
                        <img className='nav-logo me-3 mb-2' src={logo} alt="logo" />
                        LearnBD
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-white fw-bold" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cources' className="nav-link text-white fw-bold" href="#">Cources</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold" href="#">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blog' className="nav-link text-white fw-bold" href="#">Blog</Link>
                            </li>
                        </ul>
                        <form className="d-flex pe-3" >
                            <Link to='/login' className="nav-link me-3 text-white fw-bold" href="#">LogIn</Link>
                            <Link to='/register' className="nav-link text-white fw-bold" href="#">Register</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;