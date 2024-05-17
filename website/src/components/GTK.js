import React from 'react';

export default function GTK() {
    return (
        <>
            <h1 className='font-bold text-3xl mb-8'>
                Get to know me!
            </h1>
            <p className='w-full lg:w-11/12 text-lg'>
                I am a student at the University of Florida studying Computer Science. I enjoy
                working on projects that involve <strong>Full-Stack</strong> development and AI/Machine Learning. Checkout
                some of my projects on the <strong>Projects</strong> page!
                <br />
                <br />
                I love connecting with other people in the tech community, so feel free to reach out to me on {' '} 
                <a href="https://www.linkedin.com/in/ronan-virmani-UF"
                className='text-purple font-bold underline underline-offset-2'
                >LinkedIn</a> where we can connect.
                <br />
                <br />
                I am open to new internship opportunities where I can contribute, learn, and grow. If 
                you have a good opportunity that matches my skills and experience, don't hesitate to reach out.
            </p>
            <a className='bg-purple rounded-md text-white text-xl font-bold w-full lg:w-1/3 mt-5 py-3 px-12 text-center'  
                href="#contact">
                CONTACT
            </a>
        </>
    );
}
