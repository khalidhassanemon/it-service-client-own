import React from 'react';
import img from '../../assets/about/about_me.svg'

const About = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-center items-center p-10 gap-16 lg:p-20 flex-col md:flex-row">
                <div className='md:w-1/2'>
                    <img src={img} className="w-full lg:max-w-md rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='md:w-1/2'>
                    <h1 className="text-5xl text-sky-700 font-bold">About us</h1>
                    <p className="py-6">Technology services are professional services designed to facilitate the use of technology by enterprises and end users. Technology services provide specialized technology-oriented solutions by combining the processes and functions of software, hardware, networks, telecommunications and electronics.T services help provide and maintain the technology tools your office uses every day. Understanding what services IT provides can help you determine which ones you need when looking for an IT service provider. In this article, we define IT services and what they're for so you can find an IT team that works best for your organization.</p>
                </div>
            </div>
        </div>
    );
};

export default About;