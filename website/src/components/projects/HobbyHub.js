import React from 'react';
import ProjectSkill from '../ProjectSkill';
import image from './HH.png';

export default function HobbyHub() {
    return (
        <div className='flex flex-col lg:flex-row items-center text-center my-6 mx-4 sm:mx-8 lg:mx-24'>
            <div className='lg:w-1/2 p-4 lg:p-0 flex flex-col my-12'>
                <a href='https://github.com/LukeSutor/HobbyHub' 
                    target="_blank" rel="noopener noreferrer">
                    <h2 className='text-2xl font-bold hover:text-purple'>
                        HobbyHub
                    </h2>
                </a>
                <p className='text-lg mt-6 px-4'>
                    Hobby Hub is a web application that allows users to search for hobbies and activities based on their interests. 
                    The user can then save hobbies to their profile and remove them as they please. Along with this they can
                    add other users as friends and chat with them.
                    The application is built using React and Supabase.
                </p>
                <div className='flex flex-wrap justify-center my-10'>
                    <ProjectSkill skill='React' />
                    <ProjectSkill skill='Supabase' />
                    <ProjectSkill skill='Tailwind CSS' />
                </div>
            </div>
            <div className='lg:w-1/2 p-4 lg:p-0'>
                <a className='block hover:border-purple hover:border-2 hover:rounded-xl'
                    href="https://celadon-pasca-504049.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={image} alt="Preview"
                        className="w-full h-auto my-8 lg:my-0 rounded-xl border-2 border-white" />
                </a>
            </div>
        </div>
    );
}
