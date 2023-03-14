import { useQuery } from '@tanstack/react-query';
import React from 'react';

import CourceCard from '../CourseCard/CourceCard';
import Loading from '../Loading/Loading';
import './Cources.css'
import img from '../../images/feedback.webp'

const Cources = () => {


    const { data: cources = [], isLoading } = useQuery({
        queryKey: ['cources'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cources?courseId=${1}`)
            const data = await res.json();
            return data;
        }

    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className=''>

            {/* searching section  */}

            <section className='search-section'>
                <div className='row row-section mx-4'>
                    <h1 className='col-12 col-lg-4 text-center fw-bold '> Courses</h1>
                    <div className='col-12 col-lg-8'>
                        <div class="input-section input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search your favourite course" />
                            <button class="btn button-color px-4 " ><i class="fa-solid fa-magnifying-glass fs-2"></i></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* course type section  */}
            <section className='m-4'>
                <div className=' row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 gx-3'>
                    <div className='col'>
                        <button type="button" class="btn course-button  mx-auto  btn-outline-info">Programming</button>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn course-button  mx-auto  btn-outline-info">UI/UX Design</button>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn course-button  mx-auto  btn-outline-info">Development</button>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn course-button  mx-auto  btn-outline-info">IT & Software</button>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn course-button  mx-auto  btn-outline-info">BUsiness </button>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn course-button  mx-auto  btn-outline-info">Marketin</button>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn course-button  mx-auto  btn-outline-info">Photography</button>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn course-button  mx-auto  btn-outline-info">Helth & Care</button>
                    </div>





                </div>

            </section>

            <div className='m-4'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-y-2' >
                    {
                        cources.map(cource => <CourceCard
                            key={cource.id}
                            cource={cource}></CourceCard>)
                    }
                </div>
            </div>

            <section className='m-4 '>
                <div className=' feedback-section p-4'>
                    <div className=' d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                        <div>
                            <h2 className=' lh-lg'> I love to learn new things and skilify has help me a lot to learn more new things and new courses.</h2>
                            <p>Riaz Surti | Hearthy Foods</p>
                        </div>
                        <div >
                            <img className='feedback-img' src={img} alt="" />
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Cources;