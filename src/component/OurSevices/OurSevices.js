import React from 'react';
import './OurSevices.css'
import img from '../../images/serviceImg.webp'

const OurSevices = () => {
    return (
        <div className='service-section py-3 p-lg-5'>
            <div className='m-4 d-lg-flex justify-content-between align-items-center'>
                <div className='me-lg-5'>
                    <h1>
                        Get more close with your courses.
                    </h1>
                    <h4>
                        We provide a wide range of courses for the different sectors you can choose from, which suits you perfectly
                    </h4>
                    <p className=' my-4'>
                        <i class="fa-regular fa-square-check pe-4"></i>
                        Detail description of each course
                    </p>
                    <p className=' my-4'>
                        <i class="fa-regular fa-square-check pe-4"></i>
                        Easy to understand language
                    </p>
                    <p className=' my-4'>
                        <i class="fa-regular fa-square-check pe-4"></i>
                        Simple and easy to learn courses.
                    </p>
                    <button type="button" class="btn btn-primary my-4">Start Learning Now</button>

                </div>
                <div className='section-img '>
                    <img className=' position-relative img-fluid' src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default OurSevices;