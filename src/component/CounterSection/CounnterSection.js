import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './CounterSection.css'

const CounnterSection = () => {

    const [viewport, setViewport] = useState(false)

    return (
        <div className=' section-bg mb-0'>
            <ScrollTrigger onEnter={() => setViewport(true)} onExit={() => setViewport(false)}>
                {
                    viewport &&
                    <div className='row gy-4 mx-0'>
                        <div className="col-12 col-md-6 cols-lg-3 mx-auto card-info d-flex flex-column justify-content-center align-items-center" >
                            <div>
                                <i class="fa-solid fa-user-tie fs-3 mb-2" ></i>
                            </div>
                            <h1>
                                <CountUp start={0} end={3000} duration={2} delay={0}></CountUp>+
                            </h1>
                            <p>Active Student</p>
                        </div>
                        <div className="col-12 col-md-6 cols-lg-3 mx-auto card-info d-flex flex-column justify-content-center align-items-center" >
                            <div>
                                <i class="fa-solid fa-book-open fs-3 mb-2"></i>
                            </div>
                            <h1>
                                <CountUp start={0} end={100} duration={2} delay={0}></CountUp>+
                            </h1>
                            <p>Active Cources</p>
                        </div>
                        <div className="col-12 col-md-6 cols-lg-3 mx-auto card-info d-flex flex-column justify-content-center align-items-center" >
                            <div>
                                <i class="fa-solid fa-person-chalkboard fs-3 mb-2"></i>
                            </div>
                            <h1>
                                <CountUp start={0} end={70} duration={2} delay={0}></CountUp>+
                            </h1>
                            <p>Cource Teacher</p>
                        </div>
                        <div className="col-12 col-md-6 cols-lg-3 mx-auto card-info d-flex flex-column justify-content-center align-items-center" >
                            <div>
                                <i class="fa-solid fa-file-video fs-3 mb-2"></i>
                            </div>
                            <h1>
                                <CountUp start={0} end={7000} duration={2} delay={0}></CountUp>+
                            </h1>
                            <p>Video Class</p>
                        </div>
                    </div>
                }
            </ScrollTrigger>
        </div>
    );
};

export default CounnterSection;