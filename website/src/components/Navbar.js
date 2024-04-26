import React from 'react';

export default function Navbar() {
    return (
        <header className='flex justify-end bg-white flex-row p-8 
        sticky top-0 font-bold text-md shadow-lg'>
            <a className='px-8' href="#home">
                HOME
            </a>
            <a className='px-8' href="#about">
                ABOUT
            </a>
            <a className='px-8' href="#projects">
                PROJECTS
            </a>
            <a className='px-8' href="#contact">
                CONTACT
            </a>
        </header>
    );
}