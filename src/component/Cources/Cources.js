import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourceHeader from '../CourceHeader/CourceHeader';
import CourceCard from '../CourseCard/CourceCard';
import './Cources.css'

const Cources = () => {
    const cources = useLoaderData();

    return (

        <div className='row m-0'>
            <div className=' col-md-3 '>
                {
                    cources.map(ch => <CourceHeader
                        key={ch.id}
                        course={ch}></CourceHeader>)
                }
            </div>
            <div className='col col-md-9'>
                <div className='row '>
                    {
                        cources.map(cource => <CourceCard
                            key={cource.id}
                            cource={cource}></CourceCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Cources;