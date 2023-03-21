import React from 'react';
import { toast } from 'react-hot-toast';
import './EnrolledCource.css'

const EnrolledCource = ({ cource, refetch }) => {
    const { _id, courceImg, courceName, price, rating, tutorImg, tutorName } = cource
    console.log(cource);

    let countStar = [];
    for (let i = 1; i <= parseInt(rating); i++) {
        countStar.push(i)
    }

    const handleDelete = () => {
        const confirm = window.confirm('Are you sure to delete this cource')
        if (confirm) {
            fetch(`https://63-assignment-server.vercel.app/deleteEnrolled?courceId=${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Deleted successfully")
                    refetch();
                })

        }
    }
    return (
        <div>
            <div class="position-relative card-bg card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={courceImg} class="img-fluid cource-img rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{courceName}</h5>
                            <p class="card-text">Rating :
                                {
                                    countStar.map(star => <i key={star} class="fa-regular fa-star ms-1 text-info"></i>)
                                }

                            </p>
                            <div className=' d-flex align-items-center'>
                                <img className='tutorImg me-2' src={tutorImg} alt="" />
                                <h6> {tutorName}</h6>
                            </div>
                            <div className=' price-position'>
                                <h2>{price} BDT <i onClick={handleDelete} class="fa-solid fa-trash-can ms-4 fs-3 danger-button"></i></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrolledCource;