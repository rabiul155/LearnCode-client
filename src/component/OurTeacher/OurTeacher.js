import React from 'react';
import './OurTeacher.css'
import img1 from '../../images/img1.jfif'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.PNG'
import img6 from '../../images/img6.PNG'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpeg'

const OurTeacher = () => {
    return (
        <div className='mx-4'>
            <h2 className=' text-center fw-bold mt-5'>Meet Our Top Class Teacher </h2>


            <div id="carouselExampleIndicators" class="carousel slide position-relative" data-bs-ride="carousel">
                <div class="carousel-indicators position-absolute indicator">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
                            <div className=' row row-cols-1 row-cols-lg-2'>
                                <div className='col my-3 mx-auto content-box p-4'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className=' d-flex justify-content-center '>
                                            <img src={img1} className="teacher-img" alt="..." />
                                            <div className=''>
                                                <h3 className=' mb-0'>Lora Rose</h3>
                                                <p>Web designer</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=' d-none d-md-block'>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>As a web designer, I strive to create intuitive and visually appealing designs that deliver a seamless user experience</p>
                                </div>
                                <div className='col d-none d-sm-block my-3 mx-auto content-box p-4'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className=' d-flex justify-content-center '>
                                            <img src={img2} className="teacher-img" alt="..." />
                                            <div className=''>
                                                <h3 className=' mb-0'>Harry Potter</h3>
                                                <p>Web Developer</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=' d-none d-md-block'>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>As a web development teacher, I guide students to learn programming languages and frameworks to build robust, efficient, and scalable web applications.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <div className=' row row-cols-1 row-cols-lg-2'>
                                <div className='col my-3 mx-auto content-box p-4'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className=' d-flex justify-content-center '>
                                            <img src={img3} className="teacher-img" alt="..." />
                                            <div className=''>
                                                <h3 className=' mb-0'>William Fade</h3>
                                                <p>Software Engineer</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=' d-none d-md-block'>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p> As a software engineering teacher, I instruct students to use software design principles to build high-quality, maintainable, and scalable software solutions.</p>
                                </div>
                                <div className='col d-none d-sm-block my-3 mx-auto content-box p-4'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className=' d-flex justify-content-center '>
                                            <img src={img4} className="teacher-img" alt="..." />
                                            <div className=''>
                                                <h3 className=' mb-0'>Joe Dall</h3>
                                                <p>Marketing Executive</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=' d-none d-md-block'>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>As a marketing management teacher, I teach students how to create and implement effective marketing strategies that align with business goals and target customer needs.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <div className=' row row-cols-1 row-cols-lg-2'>
                                <div className='col my-3 mx-auto content-box p-4'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className=' d-flex justify-content-center '>
                                            <img src={img5} className="teacher-img" alt="..." />
                                            <div className=''>
                                                <h3 className=' mb-0'>Willi Fade</h3>
                                                <p>Business Administrator</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=' d-none d-md-block'>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>As a business administration teacher, I educate students on the principles of business management, leadership, and decision-making to prepare them for successful careers in various industries.</p>
                                </div>
                                <div className='col d-none d-sm-block my-3 mx-auto content-box p-4'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className=' d-flex justify-content-center '>
                                            <img src={img6} className="teacher-img" alt="..." />
                                            <div className=''>
                                                <h3 className=' mb-0'>Tony Stark</h3>
                                                <p>Helth Care Executive</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=' d-none d-md-block'>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>As a healthcare management teacher, I educate students on healthcare policies, regulations, and operations to prepare them for leadership roles in healthcare organizations.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <div className=' row row-cols-1 row-cols-lg-2'>
                                <div className='col my-3 mx-auto content-box p-4'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className=' d-flex justify-content-center '>
                                            <img src={img7} className="teacher-img" alt="..." />
                                            <div className=''>
                                                <h3 className=' mb-0'>Cris Pret</h3>
                                                <p>Photography Instructor</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=' d-none d-md-block'>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>As a photography instructor, I teach students how to capture and create compelling images using various techniques, styles, and equipment.</p>
                                </div>
                                <div className='col d-none d-sm-block my-3 mx-auto content-box p-4'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className=' d-flex justify-content-center '>
                                            <img src={img8} className="teacher-img" alt="..." />
                                            <div className=''>
                                                <h3 className=' mb-0'>Lwis Brawn</h3>
                                                <p>It & Tech Instructor</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=' d-none d-md-block'>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                                <i class="fa-regular fa-star-half-stroke star fs-4 p-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>As an IT and tech instructor, I educate students on computer systems, networks, programming, and emerging technologies to prepare them for IT careers.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev  " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon position-absolute left-button" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next   " type="button" data-bs-target="#carouselExampleIndicators " data-bs-slide="next">
                    <span class="carousel-control-next-icon position-absolute rignt-button " aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default OurTeacher;