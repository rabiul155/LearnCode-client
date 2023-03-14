import React from 'react';
import { Link } from 'react-router-dom';
import './CourceCard.css'

const CourceCard = ({ cource }) => {

    console.log(cource)

    const { _id, name, picture, price, rating, video, join, tutorImg, tutorName } = cource;

    return (
        <div className='col my-3 p-0'>
            <div className="card cource-container mx-auto" >
                <img src={picture} className="card-img-top course-img bg-black" alt="..." />
                <div className="card-body p-1 Pb-0 my-2 mb-0">
                    <div className=' d-flex justify-content-between'>
                        <div>
                            <i class="fa-regular fa-star-half-stroke text-info p-1"></i>
                            <span>{rating}</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-circle-play text-info p-1"></i>
                            <span>{video}</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-user text-info p-1"></i>
                            <span>{join}</span>
                        </div>
                    </div>
                    <hr />
                    <h5 className="card-title mx-1 my-2">{name}</h5>

                    <div className='my-3 mx-1 d-flex justify-content-between align-items-center'>
                        <div className=' d-flex align-items-center'>
                            <img className=' tutorImg' src={tutorImg} alt="" />
                            <h6 className=' m-1'>{tutorName}</h6>
                        </div>
                        <h5>{price} BDT</h5>
                    </div>

                    <Link to={`/cource/${_id}`} className="btn btn-primary py-2 w-100">COURSE DETAILS </Link>
                </div>
            </div>
        </div >

    );
};

export default CourceCard;