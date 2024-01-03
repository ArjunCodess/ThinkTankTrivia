import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.svg';

const Home = () => {
    return (
        <section className='lg:w-9/12 md:w-[90%] mx-auto mt-12 flex flex-col md:flex-row px-8 justify-between items-center md:justify-center'>
            <div className='md:w-1/2 w-full'>
                <h2 className='lg:text-4xl text-3xl font-medium text-[#333] lg:leading-normal leading-normal mb-3'>Master New Concepts <span className='text-blue-700 hover:text-blue-500 hover:tracking-widest transition-all duration-300'>Effortlessly</span></h2>
                <p className='py-4 mb-6 text-gray-500 pl-5 border-l-4 border-blue-700 text-base'>We will guide you to success by ensuring that you are well prepared for exams and tests.</p>
                <div className='text-lg font-medium block'>
                    <Link to="/quiz"><button className='border-2 border-blue-700 bg-blue-700 px-6 py-2 mb-3 text-white rounded-lg hover:tracking-widest mr-3 transition-all duration-300'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>View Catalogue</button></Link>
                </div>
            </div>

            <div className='md:w-1/2 w-full flex-shrink-0'>
                <img src={banner} alt='banner' className='w-full mx-auto' />
            </div>
        </section>
    );
};

export default Home;
