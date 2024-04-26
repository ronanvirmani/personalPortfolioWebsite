import React from 'react';
import AboutHeading from './AboutHeading';
import Skills from './Skills';
import GTK from './GTK';

export default function About() {

    return (
        <div id="about" className='h-max mb-12'>
            <AboutHeading />
            <div className='flex flex-row'>
                <div className='w-1/2 flex flex-col ml-10 pl-20 my-12'>
                    <GTK />
                </div>
                <div className='w-1/2 flex flex-col my-12'>
                    <h1 className='font-bold text-3xl mb-8'>
                        My Skills
                    </h1>
                    <div className='flex flex-row mb-10'>
                        <Skills skill='JavaScript' />
                        <Skills skill='C/C++' />
                        <Skills skill='Python' />
                        <Skills skill='Java' />
                        <Skills skill='SQL' />
                        <Skills skill='HTML/CSS' />
                    </div>
                    <div className='flex flex-row'>
                        <Skills skill='React' />
                        <Skills skill='Node.js' />
                        <Skills skill='SupaBase' />
                        <Skills skill='PHP' />
                        <Skills skill='GitHub' />
                        <Skills skill='Pandas' />
                    </div>
                </div>
            </div>
        </div>
    );
}