import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";
import './CourceDetails.css';

const ref = React.createRef();

const CourceDetails = () => {
    const cource = useLoaderData();

    const { _id, price, name, picture, heading, details } = cource;
    return (
        <div className=' mt-2 position-relative'>
            <h1 className='text-md-center ms-3'>{name}</h1>
            <ReactToPdf targetRef={ref} filename="code.pdf">
                {({ toPdf }) => <button onClick={toPdf} className=' btn btn-outline-info mt-1 me-2 me-md-5 position-absolute top-0 end-0 ' >Download PDF</button>
                }
            </ReactToPdf>

            <hr />
            <div ref={ref} className=' d-md-flex justify-content-between align-items-center m-3'>
                <div>
                    <img className=' details-image m-1 m-md-3' src={picture} alt="" />
                </div>
                <div className=' m-1 m-md-3 text-info'>
                    <h2>{heading}</h2>
                    <p>{details}</p>
                    <h3>Price : {price}$</h3>
                </div>
            </div>

            <div className=' d-flex justify-content-center'>
                <Link to={`/premium/${_id}`} className=' btn btn-outline-info ' > Get Pemium access</Link>

            </div>
        </div>
    );
};

export default CourceDetails;