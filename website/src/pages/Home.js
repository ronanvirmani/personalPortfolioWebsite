import React, { useEffect, useRef } from 'react';

export default function Home() {
    const homeRef = useRef(null);
    const navbarRef = useRef(null);

    useEffect(() => {
        const getNavbarHeight = () => {
            if (navbarRef.current) {
                return navbarRef.current.getBoundingClientRect().height;
            }
            return 0; // Default value if navbarRef is not available
        };

        const navbarHeight = getNavbarHeight();
        
        if (homeRef.current) {
            const homeRect = homeRef.current.getBoundingClientRect();
            const scrollPosition = homeRect.top - navbarHeight;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    }, []);

    return (
        <div ref={homeRef} id="home" className='flex h-screen justify-center items-center flex-col bg-gray-100 p-4 sm:p-8'>
            <h1 className='text-4xl sm:text-6xl font-bold text-center'>
                HEY, I'M RONAN VIRMANI
            </h1>
            <p className='text-lg sm:text-xl text-center mt-4'>
                I'm a full-stack developer.
            </p>
            <a className='mt-5 py-2 px-8 sm:py-3 sm:px-12 rounded-md bg-purple text-white text-lg sm:text-xl font-bold text-center hover:bg-purple-700 transition duration-300'  
                href="#projects">
                PROJECTS
            </a>
        </div>
    );
}
