import React from 'react';
import bookmarkImage from './bookmark.png';
import ProjectSkill from '../ProjectSkill';

export default function BookMarkd() {
    return (
        <div className='flex flex-col lg:flex-row items-center text-center my-6 mx-4 sm:mx-8 lg:mx-24'>
            <div className='lg:w-1/2 p-4 lg:p-0'>
                <a className='block hover:border-purple hover:border-2 hover:rounded-xl'
                    href="https://book-markd.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={bookmarkImage} alt="Preview"
                        className="w-full h-auto my-8 lg:my-0 rounded-xl border-2 border-white" />
                </a>
            </div>
            <div className='lg:w-1/2 flex flex-col my-12'>
                <a href='https://github.com/ronanvirmani/BookMarkd' 
                    target="_blank" rel="noopener noreferrer">
                    <h2 className='text-2xl font-bold hover:text-purple underline'>
                        Book Mark'd
                    </h2>
                </a>
                <p className='text-lg mt-6 px-4'>
                    Book Mark'd is a web application that allows users to search for books using the Google Books API. 
                    The user can then save books to their reading list and remove them as they please. 
                    The application is built using React and Supabase.
                </p>
                <div className='flex flex-wrap justify-center my-10'>
                    <ProjectSkill skill='React' />
                    <ProjectSkill skill='Supabase' />
                    <ProjectSkill skill='Tailwind CSS' />
                </div>
            </div>
        </div>
    );
}
