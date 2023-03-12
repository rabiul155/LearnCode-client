import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/logo.png'
import './Navbar.css'
import profile from '../../images/profile.png';
import { FaMoon } from "react-icons/fa";
import { HiLightBulb, HiOutlineMoon } from "react-icons/hi";

const Navbar = () => {

    const navigate = useNavigate();

    const { user, logOut, dark, setDark } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
                toast.success('log Out successfully')
            })
            .catch(e => {
                console.error('log out error', e)
            })
    }

    const themeLight = () => {
        setDark(false)
    }
    const themeDark = () => {
        setDark(true)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-color">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white fw-bolder">
                        <img className='nav-logo me-3 mb-2' src={logo} alt="logo" />
                        LearnCode
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
                                <Link to='/faq' className="nav-link text-white fw-bold" >FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blog' className="nav-link text-white fw-bold" href="#">Blog</Link>
                            </li>
                        </ul>
                        <form className="d-flex pe-3" >
                            {
                                user?.uid ?
                                    <>
                                        <Link onClick={handleLogOut} to='/register' className="nav-link text-white fw-bold me-4" href="#">LogOut</Link>
                                        {
                                            user?.photoURL ?
                                                <img className=' pb-1 rounded rounded-circle' data-toggle="tooltip" data-placement="top" title={user?.displayName
                                                } src={user.photoURL} style={{ width: "30px" }} alt="" />
                                                :
                                                <img className='pb-1 rounded rounded-circle' data-toggle="tooltip" data-placement="top" title={user?.displayName
                                                } src={profile} style={{ width: "30px" }} alt="" />
                                        }
                                    </>

                                    :
                                    <>
                                        <Link to='/login' className="nav-link me-3 text-white fw-bold" href="#">LogIn</Link>
                                        <Link to='/register' className="nav-link text-white fw-bold" href="#">Register</Link>

                                    </>
                            }

                            <div className='ms-4'>
                                {
                                    dark ?
                                        <HiLightBulb onClick={themeLight} className=' fs-3'></HiLightBulb>
                                        :
                                        <HiOutlineMoon onClick={themeDark} className=' fs-3'></HiOutlineMoon>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;