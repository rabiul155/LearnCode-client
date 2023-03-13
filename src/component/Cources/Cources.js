import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourceHeader from '../CourceHeader/CourceHeader';
import CourceCard from '../CourseCard/CourceCard';
import Loading from '../Loading/Loading';
import './Cources.css'

const Cources = () => {


    const { data: cources = [], isLoading } = useQuery({
        queryKey: ['cources'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/cources')
            const data = await res.json();
            return data;
        }

    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <div>
            <div className='row m-0 '>

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

        </div>
    );
};

export default Cources;