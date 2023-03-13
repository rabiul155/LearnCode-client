import React from 'react';
import './Home.css';
import banner1 from '../../images/banner4.jpg'
import banner2 from '../../images/banner6.jpg'
import banner3 from '../../images/banner1.jpg'
import Review from '../Review/Review';
import CounnterSection from '../CounterSection/CounnterSection';
import CourceCategory from '../CourceCategory/CourceCategory';
import OurTeacher from '../OurTeacher/OurTeacher';
import OurSevices from '../OurSevices/OurSevices';
import ApplyTeacher from '../ApplyTeacher/ApplyTeacher';


const Home = () => {
    return (
        <div className=''>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block  banner-img" alt="..." />
                        <div className="carousel-caption d-md-block info">
                            <h2>Discover Our Popular cources</h2>
                            <p>Become a developer from home.Try our most popular cources.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block banner-img" alt="..." />
                        <div className="carousel-caption d-md-block info">
                            <h2>Start learning form today level up your coding skill</h2>
                            <p> Digital education takes you further, Bertelsmann is giving away 50000 scholarships.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block banner-img" alt="..." />
                        <div className="carousel-caption d-md-block info">
                            <h2>Advance your career at your own pace</h2>
                            <p>Build your bridge to better anywhere, at any time, with free courses </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className=''>
                <CourceCategory></CourceCategory>
                <OurSevices></OurSevices>
                <OurTeacher></OurTeacher>
                <ApplyTeacher></ApplyTeacher>
                <Review></Review>
                <CounnterSection></CounnterSection>
            </div>

        </div>

    );
};

export default Home;