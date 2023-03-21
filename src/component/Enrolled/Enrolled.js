import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import Loading from '../Loading/Loading';
import EnrolledCource from './EnrolledCource';
import './EnrolledCource.css';
import img1 from '../../images/p1.png'
import img2 from '../../images/p2.png'
import img3 from '../../images/p3.png'
import { useState } from 'react';


const Enrolled = () => {

    const [checkout, setCheckout] = useState(false)
    const [button, setButton] = useState('')

    const { user } = useContext(AuthContext);

    const { data: enrolledCource = [], refetch, isLoading } = useQuery({
        queryKey: ['enrolledCource'],
        queryFn: async () => {
            const res = await fetch(`https://63-assignment-server.vercel.app/enrolled?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    let price = 0;
    let discount = 0;
    let totalPrice = 0;
    if (enrolledCource) {

        for (const cource of enrolledCource) {
            price = price + cource.price;
        }

        discount = price * 0.05;
        totalPrice = price - discount;
    }

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='m-4'>
            <div className=' row '>
                <div className=' col-12 col-md-8'>
                    {enrolledCource.length === 0 &&
                        <h2 className=' text-center mt-5'>You do not enrolled any cource</h2>
                    }
                    {

                        enrolledCource?.map(cource => <EnrolledCource
                            key={cource._id}
                            cource={cource}
                            refetch={refetch}
                        ></EnrolledCource>)
                    }

                </div>
                <div className=' col-12 col-md-4 '>

                    <div className={`mx-4 p-5 rounded-2 checokout-bg ${checkout ? 'd-none' : 'd-block'}`}>
                        <h3>Cart Details </h3>
                        <div className=' d-flex justify-content-between'>
                            <h4>Price : </h4>
                            <h4> {price} BDT</h4>
                        </div>
                        <div className=' d-flex justify-content-between'>
                            <h5>Discount : </h5>
                            <h5>{discount} BDT</h5>
                        </div>

                        <hr />
                        <div className=' d-flex justify-content-between'>
                            <h4>TotalPrice : </h4>
                            <h4>{totalPrice} BDT</h4>
                        </div>

                        <button onClick={() => setCheckout(!checkout)} className='btn mt-5 btn-primary checkout'>Checkout Now</button>
                    </div>

                    <div className={`mx-4 p-5 rounded-2 checokout-bg ${checkout ? 'd-block' : 'd-none'}`}>
                        <h3 className=' mb-3'>Cart Details  </h3>
                        <h5 className='mb-3'>Select payment getway</h5>
                        <div className=' d-flex justify-content-between'>
                            <img onClick={() => setButton('btn1')} className={`pay-img ${button === 'btn1' && 'pay-btn'}`} src={img1} alt="" />
                            <img onClick={() => setButton('btn2')} className={`pay-img ${button === 'btn2' && 'pay-btn'}`} src={img2} alt="" />
                            <img onClick={() => setButton('btn3')} className={`pay-img ${button === 'btn3' && 'pay-btn'}`} src={img3} alt="" />
                        </div>
                        <div class="mb-3 mt-3">
                            <label class="form-label">Phone Number</label>
                            <input type="text" class="form-control" />
                        </div>

                        <div class="mb-3 ">
                            <label class="form-label">Pin Code</label>
                            <input type="password" class="form-control" />
                        </div>

                        <div className=' d-flex justify-content-between'>
                            <h4>TotalPrice : </h4>
                            <h4>{totalPrice} BDT</h4>
                        </div>


                        <button className='btn mt-3 btn-primary checkout'>Checkout Now</button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Enrolled;