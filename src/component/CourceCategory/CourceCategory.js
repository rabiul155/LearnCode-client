import React from 'react';
import { Link } from 'react-router-dom';
import './CourceCagegory.css'

const CourceCategory = () => {
    return (
        <div className='mx-3 my-5'>
            <h2 className='text-center p-4  text-bold'>Choice Our Best Cource From Top Category</h2>
            <div className=' row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-4'>

                <div className='col'>
                    <Link className='text-decoration-none' to='/cources/2'>
                        <div className=' p-4 cource  mx-auto rounded-2'>
                            <i class="fa-solid fa-laptop-code fs-2 icon-section  p-3 bg-body rounded-2"></i>
                            <h3 className='text-bold mt-2'>Programming</h3>
                            <p>There are various programming langulage which you need to learn if you want to be a software engineer. Our cource will help you to learn more</p>
                        </div>
                    </Link>
                </div>

                <div className='col'>
                    <div className=' p-4 cource  mx-auto rounded-2'>
                        <i class="fa-solid fa-swatchbook fs-2 icon-section p-3 bg-body rounded-2"></i>
                        <h3 className=' text-bold  mt-2'>Design</h3>
                        <p>Learn how to desing your website. We have a wide range of designing cources that whice you can select the best that suit you.</p>
                    </div>
                </div>

                <div className='col'>
                    <Link className='text-decoration-none' to='/cources/1'>
                        <div className=' p-4 cource mx-auto rounded-2'>
                            <i class="fa-solid fa-code fs-2 icon-section p-3 bg-body rounded-2"></i>
                            <h3 className=' text-bold  mt-2'>Development</h3>
                            <p>Learn how to develop your  website. We provide you with a wide range of different development cources that will help you to learn more.</p>
                        </div>
                    </Link>
                </div>

                <div className='col'>
                    <div className=' p-4 cource  mx-auto rounded-2'>
                        <i class="fa-solid fa-computer icon-section fs-2  p-3 bg-body rounded-2"></i>
                        <h3 className=' text-bold  mt-2'>It & Softwate</h3>
                        <p>If you want to learn something new in it and software then this is the right place to help you with diffetent It and software cources from which you can learn more.</p>
                    </div>
                </div>

                <div className='col'>
                    <div className=' p-4 cource  mx-auto rounded-2'>
                        <i class="fa-solid fa-briefcase fs-2 icon-section  p-3 bg-body rounded-2"></i>
                        <h3 className=' text-bold  mt-2'>Business</h3>
                        <p>If you want to be a successfull business woner our cource will help you do so. You can learn the core concept of businness. book your cource now</p>
                    </div>
                </div>

                <div className='col'>
                    <div className=' p-4 cource  mx-auto rounded-2'>
                        <i class="fa-solid fa-comments-dollar icon-section fs-2  p-3 bg-body rounded-2"></i>
                        <h3 className=' text-bold  mt-2'>Marketing</h3>
                        <p>In this world marketing is essential to learn how to do execellent marketing with our cources and get your buisiness top</p>
                    </div>
                </div>
                <div className='col'>
                    <div className=' p-4 cource  mx-auto rounded-2'>
                        <i class="fa-solid fa-camera icon-section fs-2  p-3 bg-body rounded-2"></i>
                        <h3 className=' text-bold  mt-2'>Photography</h3>
                        <p>The most successfull business today is photography, but you should know hot to get it on top. Our course help you to pull you up</p>
                    </div>
                </div>
                <div className='col'>
                    <div className=' p-4 cource  mx-auto rounded-2'>
                        <i class="fa-solid fa-heart icon-section  fs-2  p-3 bg-body rounded-2"></i>
                        <h3 className=' text-bold  mt-2'>Health & Care</h3>
                        <p>The health and care industry has increase so far. You will nee to buck yourself upto catch witch and this can done with our cource</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourceCategory;