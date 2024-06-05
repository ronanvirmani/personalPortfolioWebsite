import React from 'react';
import ProjectSkill from '../ProjectSkill';
import image from './preview.png';

export default function HobbyHub() {
    return (
        <div className='flex flex-col lg:flex-row items-center text-center my-6 mx-4 sm:mx-8 lg:mx-24'>
            <div className='lg:w-1/2 p-4 lg:p-0 flex flex-col my-12'>
                <a href='https://github.com/ronanvirmani/Splitmate' 
                    target="_blank" rel="noopener noreferrer">
                    <h2 className='text-2xl font-bold hover:text-purple underline'>
                        Splitmate
                    </h2>
                </a>
                <p className='text-lg mt-6 px-4'>
                    Splitmate allows users to create accounts and make groups. In these groups they are
                    able to add/remove expenses for the whole group to split, while always keeping track of
                    the total amount owed by each member. Any user is able to add members to groups that they 
                    belong to.
                </p>
                <div className='flex flex-wrap justify-center my-10'>
                    <ProjectSkill skill='MongoDB' />
                    <ProjectSkill skill='Express' />
                    <ProjectSkill skill='React' />
                    <ProjectSkill skill='Node.js' />
                </div>
            </div>
            <div className='lg:w-1/2 p-4 lg:p-0'>
                <a className='block hover:border-purple hover:border-2 hover:rounded-xl'
                    href="https://master--harmonious-florentine-0617fc.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={image} alt="Preview"
                        className="w-full h-auto my-8 lg:my-0 rounded-xl border-2 border-white" />
                </a>
            </div>
        </div>
    );
}
