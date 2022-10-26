import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Premium.css'
import p1 from '../../images/p1.png'
import p2 from '../../images/p2.png'
import p3 from '../../images/p3.png'

const Premium = () => {
    const cource = useLoaderData()
    const { name, price } = cource;
    return (
        <div className=' d-flex justify-content-center'>
            <form className='premium pt-3 ps-4 pe-4 '>
                <h2 className=' text-center '>{name}</h2>
                <hr />

                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Example1">Cource Name</label>
                    <input defaultValue={name} type="text" id="form2Example1" className="form-control search-field" required />

                </div>


                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Example2">Cource Price</label>
                    <input defaultValue={price} type="text" id="form2Example2" className="form-control search-field" required />

                </div>

                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Example2">Your Phone Number</label>
                    <input type="text" id="form2Example2" className="form-control search-field" required />

                </div>
                <div className="form-outline mb-3">
                    <label className="form-label mb-2" htmlFor="form2Example2">Payment
                        Method</label>

                    <div className=' payment-logo d-flex justify-content-between mb-2'>
                        <img src={p1} alt="" srcset="" />
                        <img src={p2} alt="" srcset="" />
                        <img src={p3} alt="" srcset="" />
                    </div>
                    <button className=' btn btn-primary w-100 mt-3'>Get Access</button>
                </div>

            </form>

        </div>
    );
};

export default Premium;