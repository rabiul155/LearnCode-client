import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className=''>
            <footer class="footer-color text-center text-white">

                <div class="container p-4 pb-0">

                    <div className=' d-flex justify-content-center mb-2'>
                        <p className=' m-2'> Home </p>
                        <p className=' m-2'> About  </p>
                        <p className=' m-2'> Services </p>
                        <p className=' m-2'> Works </p>
                        <p className=' m-2'> Blogs </p>
                        <p className=' m-2'> Contuct </p>

                    </div>

                    <section class="mb-2">

                        <a class="btn btn-outline-light btn-floating rounded-circle m-2" href="#!" role="button"
                        ><i class="fab fa-facebook-f"></i></a>

                        <a class="btn btn-outline-light btn-floating rounded-circle m-2" href="#!" role="button"
                        ><i class="fab fa-twitter"></i></a>

                        <a class="btn btn-outline-light btn-floating rounded-circle m-2" href="#!" role="button"
                        ><i class="fab fa-instagram"></i ></a>


                        <a class="btn btn-outline-light btn-floating rounded-circle m-2" href="#!" role="button"
                        ><i class="fab fa-linkedin-in"></i ></a>


                        <a class="btn btn-outline-light btn-floating rounded-circle m-2" href="#!" role="button"
                        ><i class="fab fa-github rounded-circle"></i  ></a>
                    </section>

                </div>
                <div class="text-center pb-4" >
                    © 2023 Copyright : LearnCode.com

                </div>

            </footer>
        </div>
    );
};

export default Footer;