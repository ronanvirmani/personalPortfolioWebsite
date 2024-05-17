import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='flex justify-between items-center bg-white p-4 sm:p-8 sticky top-0 font-bold text-md shadow-lg'>
            <div className='text-lg sm:text-xl'>
                <a href="#home">Ronan Virmani</a>
            </div>
            <nav className={`md:flex flex-row ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row`}>
                <a className='px-4 sm:px-8 hover:text-purple py-2 md:py-0' href="#home">
                    HOME
                </a>
                <a className='px-4 sm:px-8 hover:text-purple py-2 md:py-0' href="#about">
                    ABOUT
                </a>
                <a className='px-4 sm:px-8 hover:text-purple py-2 md:py-0' href="#projects">
                    PROJECTS
                </a>
                <a className='px-4 sm:px-8 hover:text-purple py-2 md:py-0' href="#contact">
                    CONTACT
                </a>
            </nav>
            <div className='md:hidden flex items-center'>
                <button onClick={toggleMenu} className='text-purple hover:text-purple-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
