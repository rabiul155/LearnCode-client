import React from 'react';
import './Subscription.css'
import cardWave1 from '../../images/blue-wave.svg'
import cardWave2 from '../../images/brown-wave.svg'
import sub1 from '../../images/dis1.webp'
import sub2 from '../../images/dis2.webp'
import sub3 from '../../images/dis3.webp'

const Subscription = () => {
    return (
        <section className='m-4'>

            <div className='row  row-cols-1 row-cols-md-2 row-cols-lg-3 gap-3'>
                <div class="col px-0 mx-auto card card-details position-relative">
                    <div class="card-body py-4">
                        <h4 class="card-title  w-75 " >Get 3 month subscription</h4>
                        <p class="card-text ">Prouductivity course</p>
                    </div>
                    <img src={cardWave1} class="card-img-bottom" alt="..." />
                    <img className='subImg img-fluid position-absolute bottom-0 end-0' src={sub1} alt="" />
                    <div className='discount position-absolute  py-1'>
                        <p className='text-center mb-0 '>Upto 20% off</p>
                        <h1 className=' text-center'>20%</h1>
                    </div>
                </div>
                <div class="col  px-0 mx-auto card card-details position-relative">
                    <div class="card-body py-4">
                        <h4 class="card-title w-75 " >Get 6 month subscription</h4>
                        <p class="card-text ">Prouductivity course</p>
                    </div>
                    <img src={cardWave2} class="card-img-bottom" alt="..." />
                    <img className='subImg  position-absolute bottom-0 end-0' src={sub3} alt="" />
                    <div className='discount position-absolute  py-1'>
                        <p className='text-center mb-0 '>Upto 30% off</p>
                        <h1 className=' text-center'>30%</h1>
                    </div>
                </div>
                <div class="col px-0 mx-auto card card-details position-relative">
                    <div class="card-body">
                        <h4 class="card-title mt-1 w-75 " >Get 12 month subscription</h4>
                        <p class="card-text ">Prouductivity course</p>
                    </div>
                    <img src={cardWave1} class="card-img-bottom " alt="..." />
                    <img className='subImg lastImg position-absolute bottom-0 end-0' src={sub2} alt="" />
                    <div className='discount position-absolute  py-1'>
                        <p className='text-center mb-0 '>Upto 50% off</p>
                        <h1 className=' text-center'>50%</h1>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Subscription;