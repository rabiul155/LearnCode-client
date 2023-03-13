import React from 'react';
import './ApplyTeacher.css'
import img from '../../images/img5.PNG'
import img2 from '../../images/img6.PNG'

const ApplyTeacher = () => {
    return (
        <div className=' m-4  pt-5 row row-cols-1 row-cols-lg-2'>
            <div className='col mx-auto section-card d-flex  p-4'>
                <img src={img} alt="" />
                <div>
                    <h2>Become a teacher</h2>
                    <p>Teach what you love. Coursector gives you the tools to create a course.</p>
                    <button className=' btn btn-primary my-3'>Apply As Teacher</button>
                </div>
            </div>
            <div className='col mx-auto  section-card d-flex  p-4'>
                <img src={img2} alt="" />
                <div>
                    <h2>Coursector for business</h2>
                    <p>Get unlimited access to 3,000+ of Coursector’s top courses for your team</p>
                    <button className=' btn btn-primary my-3'>Get Skillify for business</button>
                </div>
            </div>

        </div>
    );
};

export default ApplyTeacher;