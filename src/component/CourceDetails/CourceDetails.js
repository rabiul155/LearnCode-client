import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import Subscription from '../Subscription/Subscription';
import './CourceDetails.css';



const CourceDetails = () => {
    const navigae = useNavigate()
    const cource = useLoaderData();
    const { user } = useContext(AuthContext)
    console.log(user);

    const { _id, price, name, tutorImg, tutorName, picture, details, join, video, rating } = cource;

    const handleEnrol = () => {
        const enrolledCourse = {
            courceId: _id,
            courceImg: picture,
            rating,
            courceName: name,
            price: price,
            tutorName,
            tutorImg,
            student: user?.email
        }
        fetch('http://localhost:5000/enrolled', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(enrolledCourse)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Successfully Enrolled Cource")
                navigae(`/enrolled`)
            })
    }
    return (
        <div className=' mt-2 mx-4'>
            <div className=' position-relative row'>
                <div className=' col-12 col-md-8'>
                    <h1 className='py-4'>{name}</h1>
                    <div className=' d-flex flex-wrap justify-content-between'>
                        <p>
                            <i class="fa-regular fa-user text-info p-1"></i>
                            Total join : {join}
                        </p>
                        <p>
                            <i class="fa-regular fa-circle-play text-info p-1"></i>
                            Total Video : {video}
                        </p>
                        <p>
                            <i class="fa-regular fa-clock text-info p-1"></i>
                            Duration : 3 month
                        </p>

                        <p>
                            <i class="fa-regular fa-star-half-stroke text-info p-1"></i>
                            Rating : {rating}
                        </p>
                    </div>
                </div>
                <div className='col-12 col-md-4 my-3 '>
                    <div className="card cource-container mx-auto" >
                        <img src={picture} className="card-img-top course-img bg-black" alt="..." />
                        <div className="card-body p-2  Pb-3 my-2 mb-3">
                            <h2 className=' text-center'>{price} BDT</h2>
                            <div className='my-3 mx-1 '>
                                <h5 className="card-title text-center">7 days remaining to start</h5>
                            </div>
                            <Link onClick={handleEnrol} className="btn btn-primary py-2 w-100">ENROL NOW </Link>
                            <h5 className=' py-3'>This cource include</h5>
                            <p>
                                <i class="fa-solid fa-language ps-1 pe-3 text-primary"></i>
                                Language - English
                            </p>
                            <p>
                                <i class="fa-solid fa-display ps-1 pe-3 text-primary"></i>
                                Use on mobile tablet & deskton
                            </p>
                            <p>
                                <i class="fa-solid fa-clock-rotate-left ps-1 pe-3 text-primary"></i>
                                Full lifetime access
                            </p>
                            <p>
                                <i class="fa-solid fa-medal ps-1 pe-3 text-primary"></i>
                                Certificate of Completion
                            </p>

                            <hr />

                            <div>
                                <h5>
                                    Share this course
                                </h5>
                                <div className=' d-flex justify-content-between '>
                                    <i class="fa-brands fa-linkedin text-primary-subtle fs-3"></i>
                                    <i class="fa-brands fa-square-facebook text-primary fs-3"></i>
                                    <i class="fa-brands fa-square-twitter text-info fs-3"></i>
                                    <i class="fa-brands fa-square-instagram text-danger fs-3"></i>
                                    <i class="fa-brands fa-square-whatsapp text-success fs-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className=' tutor-says col-12 col-md-8'>
                    <h2 className=' my-5'>What's  your tutor says? </h2>
                    <div className=' d-flex'>
                        <img style={{ height: "100px", width: "100px" }} src={tutorImg} alt="" />
                        <div className=' m-2'>
                            <h5 >{tutorName}</h5>
                            <p className=' mb-0'>
                                <i class="fa-regular fa-star-half-stroke text-info me-2"></i>
                                4.5 (1457 ratings)
                            </p>
                            <p>
                                <i class="fa-regular fa-thumbs-up text-info pe-2"></i>
                                4658 Likes
                            </p>
                        </div>
                    </div>
                    <p>{details}</p>
                </div>

            </div>

            <Subscription></Subscription>

        </div>
    );
};

export default CourceDetails;


//            <ReactToPdf targetRef={ref} filename="code.pdf">
//                  {({ toPdf }) => <button onClick={toPdf} className=' btn btn-outline-info mt-1 me-2 me-md-5 position-absolute top-0 end-0 ' >Download PDF</button>
//                  }
//            </ReactToPdf>



        //     <div ref={ref} className=' d-md-flex justify-content-between align-items-center m-3'>
        //     <div>
        //         <img className=' details-image m-1 m-md-3' src={picture} alt="" />
        //     </div>
        //     <div className=' m-1 m-md-3 text-info'>
        //         <h2>{heading}</h2>
        //         <p>{details}</p>
        //         <h3>Price : {price}$</h3>
        //     </div>
        // </div>