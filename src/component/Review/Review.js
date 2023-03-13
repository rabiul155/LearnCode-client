import React from 'react'
import './Review.css'
import img1 from '../../images/stu1.webp'
import img2 from '../../images/stu2.webp'
import img3 from '../../images/stu3.webp'

const Review = () => {
    return (
        <div className=' p-4 mb-4'>
            <h2 className=' text-center font-bold pb-4'>Our Student Review</h2>
            <div className=' d-flex justify-content-center'>
                <div className='  row gap-5'>
                    <div className="card card-bg col-12 col-lg-4  mx-auto p-3 card-weidth" >
                        <img src={img1} className=" review-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Lara Rose </h5>
                            <p className="card-text">Great platform for self-paced learning! Easy-to-use interface and interactive content.</p>

                        </div>
                    </div>
                    <div className="card col-12 col-lg-4  mx-auto p-3  card-weidth" >
                        <img src={img2} className=" review-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Ava Johnson</h5>
                            <p className="card-text">I highly recommend this website for online classes. The instructors are knowledgeable and engaging.</p>

                        </div>
                    </div>
                    <div className="card col-12 col-lg-4  mx-auto p-3  card-weidth" >
                        <img src={img3} className="review-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Chloe Lee</h5>
                            <p className="card-text">The personalized feedback and support from tutors really helped me succeed in my course.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;