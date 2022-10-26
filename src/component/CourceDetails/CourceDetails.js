import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourceDetails.css'

const CourceDetails = () => {
    const cource = useLoaderData();

    const { id, price, name, picture, heading, details } = cource;
    return (
        <div className=' mt-2 position-relative'>
            <h1 className='text-center'>{name}</h1>
            <button className=' btn btn-outline-info mt-2 me-5 position-absolute top-0 end-0 ' >Download PDF</button>
            <hr />
            <div className=' d-flex justify-content-between align-items-center m-3'>
                <div>
                    <img className=' details-image' src={picture} alt="" />
                </div>
                <div className=' m-3 w-50'>
                    <h2>{heading}</h2>
                    <p>{details}</p>
                    <h3>Price : {price}$</h3>
                    <Link to={`/premium/${id}`} className=' btn btn-outline-info ' > Get Pemium access</Link>


                </div>
            </div>
            <div className=' d-flex justify-content-center'>

            </div>
        </div>
    );
};

export default CourceDetails;