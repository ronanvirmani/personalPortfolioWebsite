import React from 'react';
import AboutHeading from '../components/AboutHeading';
import Skills from '../components/Skills';
import GTK from '../components/GTK';

export default function About() {
    return (
        <div id="about" className='h-max mb-12 p-4 sm:p-8'>
            <AboutHeading />
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2 flex flex-col lg:ml-10 lg:pl-20 my-12'>
                    <GTK />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col my-12'>
                    <h1 className='font-bold text-3xl mb-8 text-center lg:text-left'>
                        My Skills
                    </h1>
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
                        <Skills skill='JavaScript' />
                        <Skills skill='C/C++' />
                        <Skills skill='Python' />
                        <Skills skill='Java' />
                        <Skills skill='SQL' />
                        <Skills skill='HTML/CSS' />
                        <Skills skill='React' />
                        <Skills skill='Node.js' />
                        <Skills skill='Express.js' />
                        <Skills skill='PHP' />
                        <Skills skill='Supabase' />
                        <Skills skill='MongoDB' />
                        <Skills skill='GitHub' />
                        <Skills skill='Pandas' />
                    </div>
                    <h1 className='mt-12 mb-8 font-bold text-3xl text-center lg:text-left'> Relevant Classes</h1>
                    <p className='text-lg text-center lg:text-left'> 
                    Data Structures and Algorithms, Software Engineering, Internet Programming, Operating Systems, Computer
Organization, Networking Fundamentals, AI Fundamentals, Natural Language Processing, and Statistics
                    </p>
                </div>
            </div>
        </div>
    );
}
