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
        <div ref={homeRef} id="home" className='flex h-screen justify-center 
        items-center flex-col bg-gray-100'>
            <h1 className='text-6xl flex font-bold'>
                HEY, I'M RONAN VIRMANI
            </h1>
            <p className='flex p-5 text-2xl'>
                I'm a full-stack developer.
            </p>
            <a className='flex bg-purple mt-5
            py-3 px-12 rounded-md text-white 
            text-xl font-bold'  
                href="#projects">
                PROJECTS
            </a>
        </div>
    );
}
