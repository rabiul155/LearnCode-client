import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import Loading from '../Loading/Loading';
import EnrolledCource from './EnrolledCource';
import './EnrolledCource.css';


const Enrolled = () => {

    const { user } = useContext(AuthContext);

    const { data: enrolledCource = [], refetch, isLoading } = useQuery({
        queryKey: ['enrolledCource'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolled?email=${user?.email}`)
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
                    {
                        enrolledCource.map(cource => <EnrolledCource
                            key={cource._id}
                            cource={cource}
                            refetch={refetch}
                        ></EnrolledCource>)
                    }

                </div>
                <div className=' col-12 col-md-4 '>

                    <div className=' mx-4 p-5 rounded-2 checokout-bg'>
                        <h3>Cart Total  </h3>
                        <div className=' d-flex justify-content-between'>
                            <h4>CourcePrice : </h4>
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

                        <button className='btn mt-5 btn-primary checkout'>Checkout Now</button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Enrolled;