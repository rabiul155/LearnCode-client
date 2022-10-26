import React from 'react';
import { Link } from 'react-router-dom';
import './CourceCard.css'

const CourceCard = ({ cource }) => {

    const { id, name, picture } = cource;

    return (
        <div className='col-3 m-3'>
            <div className="card cource-container" >
                <img src={picture} className="card-img-top bg-black" alt="..." />
                <div className="card-body p-1 ">
                    <h5 className="card-title text-black">{name}</h5>
                    <Link to={`/cource/${id}`} className="btn btn-primary w-100">Start Learning </Link>
                </div>
            </div>
        </div >

    );
};

export default CourceCard;