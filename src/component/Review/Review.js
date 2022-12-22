import React from 'react'
import './Review.css'
import img1 from '../../images/img1.jfif'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'

const Review = () => {
    return (
        <div className=' p-4'>
            <h2 className=' text-center font-bold pb-4'>Our Student Review</h2>
            <div className=' d-flex justify-content-center'>
                <div className=' text-black row gap-5'>
                    <div className="card col-12 col-lg-4  mx-auto p-3 card-weidth" >
                        <img src={img1} className=" review-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Lara Rose </h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                    <div className="card col-12 col-lg-4  mx-auto p-3  card-weidth" >
                        <img src={img2} className=" review-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Evin Luis</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                    <div className="card col-12 col-lg-4  mx-auto p-3  card-weidth" >
                        <img src={img3} className="review-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Daniel Max</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;